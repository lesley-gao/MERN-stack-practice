import { create } from "zustand";

//create a hook
export const useProductStore = create((set) => ({
    products: [],    // just like const [state, setState] = useState([]), this "products: []" is the "state"
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields." }
        }
        const res = await fetch("/api/products/", { // the complete URL here should be http://localhost:5000/api/products, please check the comments in vite.config.js file
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        });
        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data] }))
        return { success: true, message: "Product created successfully." }
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data });
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        //update the UI immediately(delete the product on the homepage), witout needing a refresh
        set((state) => ({ products: state.products.filter(product => product._id !== pid) }));
        return { success: true, message: data.message };
    },
    updateProduct: async (pid, updatedProduct) => {
        if (!updatedProduct.name || !updatedProduct.price || !updatedProduct.image) {
            return { success: false, message: "Please fill in all fields." };
        }

        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct)
        });

        const data = await res.json();

        if (!data.success) {
            return { success: false, message: data.message };
        }

        //update the UI immediately, witout needing a refresh
        // if the product id is equal to the pid that we just passed, we can just return the data, 
        // else, we'll leave the product as it is
        set((state) => ({
            products: state.products.map(product =>
                product._id === pid ? data.data : product
            )
        }));

        return { success: true, message: "Product updated successfully." };
    }
}))