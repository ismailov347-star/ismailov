export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Спасибо за покупку!</h1>
          <p className="text-gray-600">
            Оплата прошла успешно. Доступ к практикуму "Система Лёгкого Контента" будет отправлен на вашу почту в течение нескольких минут.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Что дальше?</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Проверьте почту (включая спам)</li>
              <li>• Сохраните письмо с доступами</li>
              <li>• Начните обучение прямо сейчас</li>
            </ul>
          </div>
          
          <a 
            href="/" 
            className="inline-block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}