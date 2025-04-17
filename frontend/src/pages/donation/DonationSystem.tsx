import React, { useState, ChangeEvent, FormEvent } from 'react';
import img from "../../../public/qr_img_mata_khivi.jpeg"

const DonationSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upi' | 'bank'>('upi');
  const [amount, setAmount] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for your donation of ₹${amount}!`);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-2">Support Our Cause</h1>
      <p className="text-center text-gray-600 mb-8">Your contribution helps us make a difference</p>
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`py-4 px-6 font-medium ${activeTab === 'upi' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('upi')}
          >
            UPI Payment
          </button>
          <button
            className={`py-4 px-6 font-medium ${activeTab === 'bank' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('bank')}
          >
            Bank Transfer
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'upi' ? (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Scan QR Code</h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex justify-center">
                  <img 
                    src={img} 
                    alt="UPI QR Code" 
                    className="w-84 h-74"
                  />
                </div>
                <p className="mt-4 text-center text-gray-600">
                  Scan this QR code with any UPI app to donate
                </p>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Or Send Directly</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-1">UPI ID</label>
                    <div className="flex items-center bg-white p-3 rounded border border-gray-300">
                      <span className="font-mono">9815856313@okbizaxis</span>
                      <button 
                        className="ml-auto px-3 py-1 bg-indigo-100 text-indigo-700 rounded text-sm"
                        onClick={() => copyToClipboard('yourvpa@upi')}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Open your UPI app (Google Pay, PhonePe, Paytm, etc.) and send money to this UPI ID.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Bank Transfer Details</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Account Name</label>
                    <div className="bg-white p-3 rounded border border-gray-300 font-medium">
                      Gurudwara Sahibzada Ajit Singh Ji
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Account Number</label>
                    <div className="bg-white p-3 rounded border border-gray-300 font-mono">
                      50200032750384
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Bank Name</label>
                    <div className="bg-white p-3 rounded border border-gray-300">
                      HDFC Bank
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">IFSC Code</label>
                    <div className="bg-white p-3 rounded border border-gray-300 font-mono">
                      HDFC0009206
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Branch</label>
                    <div className="bg-white p-3 rounded border border-gray-300">
                      HDFC BANK LTD, GROUND FLOOR, ITC MARKET, SADIQ ROAD, FARIDKOT-151203 PUNJAB
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Account Type</label>
                    <div className="bg-white p-3 rounded border border-gray-300">
                      Current Account
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  For international transfers, please add ₹500 as processing fee and mention "Donation" in the remarks.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Optional: Donation Form */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Leave Your Details (Optional)</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full p-3 rounded border border-gray-300"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full p-3 rounded border border-gray-300"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Donation Amount (₹)</label>
            <input 
              type="number" 
              className="w-full p-3 rounded border border-gray-300"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount in INR"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Submit Donation Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationSystem;