
const { query } = require("express");
const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  };

  module.exports.renderNewForm = (req, res) => {
  
    res.render("listings/new.ejs");
  }; 


  

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate:{
        path: "author",
      },
    })
    .populate("owner");
    if(!listing){
      req.flash("error", "Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    // console.log(listing);
    res.render("listings/show.ejs", { listing });
  };



  module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();
    
      
    let url = req.file.path;
    let filename = req.file.filename;
  
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    newListing.geometry = response.body.features[0].geometry;

    let savedListing = await newListing.save();
    // console.log(savedListing);
    await newListing.save();
    req.flash("success", "New listing created!")
    res.redirect("/listings");
  };
  
  
  module.exports.renderEditForm = async (req, res) => {

    
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
      req.flash("error", "Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing , originalImageUrl});
  };
  

  module.exports.updateListing = async (req, res) => {
    try {
      const { id } = req.params;
      const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
  
      // Geocode the new location if it was updated
      if (req.body.listing.location) {
        const response = await geocodingClient
          .forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
          })
          .send();
        listing.geometry = response.body.features[0].geometry;
      }
  
      // Update the image if a new file was uploaded
      if (req.file) {
        const { path: url, filename } = req.file;
        listing.image = { url, filename };
      }
  
      await listing.save();
      req.flash("success", "Listing Updated");
      res.redirect(`/listings/${id}`);
    } catch (err) {
      req.flash("error", "Unable to update listing.");
      res.redirect(`/listings/${id}/edit`);
    }
  };





  // module.exports.updateListing = async (req, res) => {
  //   let { id } = req.params;
  //   let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  //   if(typeof req.file !== "undefined"){
  //     let url = req.file.path;
  //     let filename= req.file.filename;
  //     listing.image = {url, filename};
  //     await listing.save();
  //   }
    
  //   req.flash("success", "Listing Updatedd");
  //   res.redirect(`/listings/${id}`);
  // };
  
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndDelete(id);
  
    if (listing) {
      const Review = require("../models/review"); // Lazy require to avoid circular dependency issues
      await Review.deleteMany({ _id: { $in: listing.reviews } });
      req.flash("success", "Listing Deleted");
    } else {
      req.flash("error", "Listing not found");
    }
    res.redirect("/listings");
};
  





















