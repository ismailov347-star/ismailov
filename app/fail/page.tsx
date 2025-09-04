export default function FailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Оплата не прошла</h1>
          <p className="text-gray-600">
            К сожалению, произошла ошибка при обработке платежа. Попробуйте еще раз или свяжитесь с нами для помощи.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">Возможные причины:</h3>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Недостаточно средств на карте</li>
              <li>• Технические проблемы банка</li>
              <li>• Превышен лимит по карте</li>
              <li>• Неверные данные карты</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <a 
              href="/offer" 
              className="inline-block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Попробовать снова
            </a>
            
            <a 
              href="/" 
              className="inline-block w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Вернуться на главную
            </a>
          </div>
          
          <div className="text-sm text-gray-500 mt-4">
            <p>Нужна помощь? Напишите нам:</p>
            <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
              support@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}