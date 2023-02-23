const Products = require("../models/Products")

const PostProducts = async (req, res) => {
    try {

        // const { name, price } = req.body;
        // const selectedFile = req.file.filename;

        // const product = new Product({ name, price,selectedFile  });
        // await product.save();

        // res.json(product);

        // console.log(req.file,req.body,"check")
        const product = await Products.findOne({ name: req.body.name })
        if (!product) {
            const productData = new Products({
                name: req.body.name,
                price: req.body.price,
                productImage: req.file.filename
            });
            // console.log(req.file.filename,"ok")
            // console.log(productData,"data")
            productData.save()

            // console.log(productData)
            if (productData) {

                res.json({ msg: "Product is added" });
            } else {
                res.json({ msg: "something went worng" });
            }
        }
        else {
            res.status(409).json({ msg: "Product already exists" });
        }

    } catch (err) {
        console.log(err);
    }
}

const GetProducts = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const size = parseInt(req.query.size) || 3;
      const count = await Products.countDocuments();
    //   console.log("hello",count)
      const data = await Products.find()
        .sort({ _id: 1 })
        .skip((page - 1) * size)
        .limit(size);
      res.status(200).json({
        productList: data,
        totalItems: count,
        msg: 'Fetch Success',
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: 'Something went wrong',
      });
    }
  };

const DeleteProducts = async (req, res) => {
    try {
        const data = await Products.find()
        if (data) {
            res.status(200).json({
                productList: data,
                msg: "Fetch Success"
            })
        } else {
            res.status(500).json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err);
    }
}

const EditProducts = async (req, res) => {
    try {
      const { name, price } = req.body;
      console.log(req.body,req.query,"++")
      const updatedProduct = await Products.findByIdAndUpdate(
        req.query.id,
        {name,price},
        {new:true} );
      if (updatedProduct) {
        console.log(updatedProduct,"hi")
        res.status(200).json({
          editProduct: updatedProduct,
          msg: "Product updated successfully"
        });
      } else {
        res.status(500).json({ msg: "Something went wrong" });
      }
    } catch (err) {
      console.log(err);
    }
    }

const GetSearchResults = async (req, res) => {
    try {
        const data = await Products.find({
            name: { $regex: req.params.key, $options: "i" }
        });
        console.log(data);
        if (data && data.length > 0) {
            res.status(200).json({
                key: data,
                msg: "Search Success",
            });
        } else {
            res.status(404).json({
                msg: "No products found",
            });
        }
    } catch (err) {
        console.log(err)
    }
}


exports.PostProducts = PostProducts
exports.GetProducts = GetProducts
exports.DeleteProducts = DeleteProducts
exports.EditProducts = EditProducts
exports.GetSearchResults = GetSearchResults