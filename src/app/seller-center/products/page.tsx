'use client';

import React, { useState, useMemo } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  stock: number;
  status: 'Aktif' | 'Nonaktif';
  image: string;
  description: string;
}

const INITIAL_DATA: Product[] = [
  {
    id: '1',
    name: 'Kemeja Flanel Kotak-kotak',
    category: 'Pakaian Pria',
    sku: 'PROD-001',
    price: 150000,
    stock: 25,
    status: 'Aktif',
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=200&h=200&fit=crop',
    description: 'Kemeja flanel berkualitas tinggi dengan motif kotak-kotak klasik.'
  },
  {
    id: '2',
    name: 'Sepatu Sneakers Putih',
    category: 'Sepatu',
    sku: 'PROD-002',
    price: 450000,
    stock: 12,
    status: 'Aktif',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=200&h=200&fit=crop',
    description: 'Sepatu sneakers putih minimalis yang cocok untuk segala acara.'
  },
  {
    id: '3',
    name: 'Celana Chino Slim Fit',
    category: 'Pakaian Pria',
    sku: 'PROD-003',
    price: 225000,
    stock: 0,
    status: 'Nonaktif',
    image: 'https://images.unsplash.com/photo-1624372333454-359f63231843?w=200&h=200&fit=crop',
    description: 'Celana chino dengan potongan slim fit yang nyaman.'
  }
];

const CATEGORIES = ['Semua Kategori', 'Pakaian Pria', 'Pakaian Wanita', 'Sepatu', 'Aksesoris', 'Elektronik'];

export default function ProductManagementPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Semua Kategori');
  const [filterStatus, setFilterStatus] = useState('Semua');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    category: 'Pakaian Pria',
    price: 0,
    stock: 0,
    sku: '',
    status: 'Aktif',
    description: '',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop'
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           product.sku.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'Semua Kategori' || product.category === filterCategory;
      const matchesStatus = filterStatus === 'Semua' || product.status === filterStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, searchTerm, filterCategory, filterStatus]);

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        category: 'Pakaian Pria',
        price: 0,
        stock: 0,
        sku: `PROD-${Math.floor(1000 + Math.random() * 9000)}`,
        status: 'Aktif',
        description: '',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop'
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...formData } as Product : p));
    } else {
      const newProduct: Product = {
        ...formData,
        id: Date.now().toString(),
      } as Product;
      setProducts([...products, newProduct]);
    }
    handleCloseModal();
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Daftar Produk</h1>
          <p className="text-gray-500">Kelola katalog produk Anda di sini.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          + Tambah Produk Baru
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="Cari nama produk atau SKU..." 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-48">
          <select 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-48">
          <select 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="Semua">Semua Status</option>
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Produk</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">SKU</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Kategori</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Harga</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Stok</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                        />
                        <span className="font-medium text-gray-800">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{product.sku}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{product.category}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">{formatIDR(product.price)}</td>
                    <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.status === 'Aktif' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button 
                          onClick={() => handleOpenModal(product)}
                          className="text-blue-600 hover:text-blue-800 p-1 transition-colors"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button 
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-800 p-1 transition-colors"
                          title="Hapus"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    Tidak ada produk ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-800">
                {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
              </h2>
              <button 
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <form onSubmit={handleSaveProduct} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-medium text-gray-700">Nama Produk</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Kategori</label>
                  <select 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    {CATEGORIES.slice(1).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <select 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value as 'Aktif' | 'Nonaktif'})}
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Nonaktif">Nonaktif</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Harga (IDR)</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: parseInt(e.target.value) || 0})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Stok</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.stock}
                    onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value) || 0})}
                  />
                </div>

                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-medium text-gray-700">URL Gambar Produk</label>
                  <input 
                    type="url" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-medium text-gray-700">Deskripsi</label>
                  <textarea 
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Simpan Produk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
