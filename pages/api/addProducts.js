import product from "../../models/product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
        // using for loop we can add multiple products at same time 
      let p = new product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        img: req.body[i].img,
        category: req.body[i].category,
        size: req.body[i].size,
        colour: req.body[i].colour,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
      });
      await p.save();
      
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "this method is not allowed" });
  }

};

export default connectDb(handler);
