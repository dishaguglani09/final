import { Link } from 'react-router';
import { CheckCircle, Package, Truck, Mail, ArrowRight } from 'lucide-react';

export function OrderSuccessPage() {
  const orderDetails = {
    orderNumber: 'ORG' + Date.now().toString().slice(-8),
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    total: 1497,
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="bg-white rounded-3xl p-12 text-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="font-serif text-4xl text-[#2a2a2a] mb-4">Order Placed Successfully!</h1>
            <p className="text-xl text-[#6b6560] mb-8">
              Thank you for choosing organic. Your order is being prepared with care.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#f5f0e8] rounded-full">
              <span className="text-sm text-[#6b6560]">Order Number:</span>
              <span className="font-bold text-lg text-[#1c3a2b]">{orderDetails.orderNumber}</span>
            </div>
          </div>

          {/* Order Timeline */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h2 className="font-semibold text-xl text-[#2a2a2a] mb-8">What happens next?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a] mb-1">Order Confirmed</h3>
                  <p className="text-sm text-[#6b6560]">{orderDetails.date}</p>
                  <p className="text-sm text-[#6b6560] mt-2">
                    We've received your order and sent a confirmation email.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-[#4a6741]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a] mb-1">Being Prepared</h3>
                  <p className="text-sm text-[#6b6560]">In Progress</p>
                  <p className="text-sm text-[#6b6560] mt-2">
                    Your organic products are being carefully packed with love.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6 text-[#4a6741]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a] mb-1">On the Way</h3>
                  <p className="text-sm text-[#6b6560]">Estimated: {orderDetails.estimatedDelivery}</p>
                  <p className="text-sm text-[#6b6560] mt-2">
                    Track your order once it's dispatched from our farm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h2 className="font-semibold text-xl text-[#2a2a2a] mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 pb-6 border-b border-[rgba(139,125,107,0.1)]">
              <div className="flex justify-between">
                <span className="text-[#6b6560]">Subtotal</span>
                <span className="font-semibold text-[#2a2a2a]">₹{orderDetails.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b6560]">Shipping</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-lg text-[#2a2a2a]">Total</span>
              <span className="font-bold text-2xl text-[#1c3a2b]">₹{orderDetails.total}</span>
            </div>
          </div>

          {/* Email Confirmation */}
          <div className="bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-3xl p-8 text-white text-center mb-8">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="font-semibold text-xl mb-2">Order Confirmation Sent</h3>
            <p className="text-[rgba(255,255,255,0.9)]">
              We've sent a detailed confirmation to your email with all order information.
            </p>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/products"
              className="px-8 py-4 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Continue Shopping
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/"
              className="px-8 py-4 bg-white hover:bg-[#f5f0e8] text-[#2a2a2a] border-2 border-[rgba(139,125,107,0.2)] rounded-full font-semibold transition-colors flex items-center justify-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
