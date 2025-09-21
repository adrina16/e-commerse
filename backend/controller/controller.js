
import Product from '../models/product.model.js';


const getproduct=async (req, res) => {
   
    

   try {


    const products = await Product.find();
    if (!products) {
      return res.status(404).json({ message: 'Products not found' });
    }
    res.status(200).json({data:products});

   } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ message: 'Server error' });
   }
}
const getproductbyid=async (req, res) => {
const { id } = req.params;
try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({data:product});
  }
  catch (error) {
    
    res.status(500).json({ message: 'Server error' });
  }
}
const addproduct=async (req, res) => {

    const product=req.body;
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      const newProduct = new Product(product);
    
     try {
      await newProduct.save();
      res.status(201).json(newProduct);
     } catch (error) {
      console.error('Error saving product:', error.message);
     }
    }
    const deleteproduct=async (req, res) => {
    const { id } = req.params;  
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
      }
      catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ message: 'Server error' });
      }
    
    }
    const updateproduct= async (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    
    
    if (updatedProduct.name || updatedProduct.price || updatedProduct.image) {
    
      
    
    
    try {
      const product= await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
      if (!product) {
        return res.status(404).json({ success:false,message: 'Product not found' });
      }
      res.status(200).json({data:product,success:true});
    
    } catch (error) {
      res.status(`500`).json({ success:false,message: 'Server error' });
    
    }
    
    }
    
    else{
      
      
      return res.status(400).json({ message: 'atleast one field required' });
    }
    }

    export { getproduct, getproductbyid, addproduct, deleteproduct, updateproduct };