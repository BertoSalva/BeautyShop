import React, { useRef } from 'react';
import CHeader from '../../components/common/CHeader';
import CText from '../../components/common/CText';
import CButton from '../../components/common/CButton';
import SalonSubDetail from '../../components/homeTab/SalonSubDetail';
import SubDetailComponent from '../../components/homeTab/SubDetailComponent';
import ChoosePayment from '../../components/modals/ChoosePayment';

const YourAppointment = () => {
  const choosePaymentRef = useRef(null);

  const onPressPayNow = () => {
    if (choosePaymentRef.current) {
      choosePaymentRef.current.show();
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-lg">
      <CHeader title="Your Appointment" />
      
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <SalonSubDetail />
        
        <div className="flex flex-col gap-4">
          <SubDetailComponent isCoupon={true} />
        </div>

        <div className="flex justify-between items-center mt-6 bg-white p-4 rounded-lg shadow">
          <div>
            <CText type="R14" color="text-gray-600">Total</CText> {/* Replaced `strings.total` */}
            <CText type="B16" className="text-lg font-bold">$70.00</CText>
          </div>
          <CButton
            title="Pay Now"  // Replaced `strings.payNow`
            type="S16"
            color="white"
            containerStyle="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
            onClick={onPressPayNow}
          />
        </div>
      </div>
      
      <ChoosePayment SheetRef={choosePaymentRef} />
    </div>
  );
};

export default YourAppointment;
