// //require express
const express = require("express");

const Contact = require("../models/Contact");

// //express router
const router = express.Router();

// ////////////Routes

// // //model Route
// //
/**
   @desc : testRoutes  
   @path : http://localhost:7000/api/contacts/test
   @method : GET
   @data : no data
   @access : public/private
  */
// // router.post("/test", (req, res) => {
// //   res.send("hello World");
// // });
// // module.exports = router;
// //Create Routes
/**
 *  @desc : testRoutes
 * @path : http://localhost:7000/api/contacts
 * @method : POST
 * @data : no data
 * @access : public/private
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    //handling errors name and email required
    if (!name || !email) {
      res.status(400).send({ msg: "name and e-mail are required" });
      return;
    }
    const contact = await Contact.findOne({ email });
    if (contact) {
      res.status(400).send({ msg: "Contact Already exist" });
      return;
    }
    const newContact = new Contact({
      name,
      email,
      phone,
    });
    // console.log(newContact);
    await newContact.save();
    res.status(200).send({ msg: "Contact added sucessfully", newContact });
  } catch (error) {
    res.status(400).send({ msg: "cannot add a contact", error: error });
  }
});
/**
 *  @desc : Get All Contacts
 * @path : http://localhost:7000/api/contacts
 * @method : GET
 * @data : no data
 * @access : public/private
 */
router.get("/", async (req, res) => {
  try {
    const listContact = await Contact.find();
    res.status(200).send({ msg: "This is List Of Contacts", listContact });
  } catch (error) {
    res.status(400).send({ msg: "Cannot Get All Contact", error });
  }
});
/**
 *  @desc : Get Contacts
 * @path : http://localhost:7000/api/contacts/:id
 * @method : GET
 * @data : req.params.id
 * @access : public/private
 */
router.get("/:id", async (req, res) => {
  try {
    const contactToGet = await Contact.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "Get The Contact", contactToGet });
  } catch (error) {
    res.status(400).send({ msg: "I Can't Get The Contact", error });
  }
});
/**
 *  @desc : Delete Contacts
 * @path : http://localhost:7000/api/contacts/:id
 * @method : Delete
 * @data : req.params._id
 * @access : public/private
 */
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Contact.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Contact Deleted" });
  } catch (error) {
    res.status(400).send({ msg: "connot delte the Contact", error });
  }
});
/**
 *  @desc : Edit Contacts
 * @path : http://localhost:7000/api/contacts/:id
 * @method : put
 * @data : req.params._id & req.body
 * @access : public/private
 */
router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Contact.updateOne({ _id }, { $set: { ...req.body } });
    if (!result.nModified) {
      res.status(400).send({ msg: "Contact already updated" });
      return;
    }
    res.status(200).send({ msg: "Contact updated" });
  } catch (error) {
    res.status(400).send({ msg: "connot Update the Contact", error });
  }
});
module.exports = router;
