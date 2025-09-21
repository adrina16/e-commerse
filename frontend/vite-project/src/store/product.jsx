import {create} from "zustand";

export const useProductStore = create((set) => ({
    products: [], 
    setProducts: (products) => set({ products }), 
    createproduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill all the fields" };
        }
        const res = await fetch("/api/products", {
            method: "POST", 
            headers: {  
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
         
        set((state) => ({
            products: [...state.products, data.product],
        }));
        return { success: true, message: "Product added successfully" };
    },
    fetchproducts: async ()=>{
        const res =await fetch("api/products")
        const data =await res.json();
        set({products: data.data})
    },
    deleteproducts: async(pid)=>{
        if(!pid)return {success:false,message:"Product not found"}  
        
        const res = await fetch(`/api/products/${pid}`, {
            method: "delete", 
            
            
        });
       const data = await res.json()
         if(!data.success)return {success:false,message:data.message}
         set(state=>({poducts:state.product.filter(product=>product._id !==pid)}))
         return {
            
            success:true,message:data.message
         }
    },
    updateproduct: async (name,price,image,pid)=>{
        if(!pid)return {success:false,message:"Product not found"}  
        const res = await fetch(`/api/products/${pid}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,price,image}),
        });
       const data = await res.json()
         if(!data.success)return {success:false,message:"Product not found"}
         set(state=>({products:state.products.map(product=>product._id === pid ? {...product,name,price,image}:product)}))
         return {
            
            success:true,message:"Product updated successfully"
         }
    }
}));
