

const ConfirmOrder = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black font-roboto">
  <div className="mr-52">
   <img src="/goBack-icon.svg" alt="Regresar"  />
  </div>
    
    <div className="p-4 border-b border-gray-200">
        
        <div className="">     
            <h1 className=" mt-4 text-lg font-semibold ml-2">Confirmá tu pedido</h1>
        </div>
    </div>
    <div className="p-4">
        <div className="flex justify-center items-center mb-4">
            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center">
                <span className="text-sm font-semibold">Comida</span>
            </div>
        </div>
        <div className="text-lg font-semibold mb-2">1 Pizza B</div>
        <div className="text-sm mb-4">
            <p>A llegar en tu domicilio</p>
            <p>30 min después de confirmar pago</p>
        </div>
        <div className="border-t border-b border-gray-200 py-4 mb-4">
            <div className="text-sm">
                <p>Pizzería B</p>
                <p>Av. Córdoba 3120, Montevideo</p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center text-sm mb-4">
            <p>Total a pagar</p>
            <p className="text-2xl font-semibold">$7000</p>
        </div>
        <button className="w-full bg-gray-200 py-2 rounded-lg text-lg font-semibold">
            Pagar
        </button>
    </div>
</div>
  );
};

export default ConfirmOrder;