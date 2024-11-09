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
        set((state) => ({ products: state.products.filter(product => product._id !== pid) }));
        return { success: true, message: data.message };
    }
}))