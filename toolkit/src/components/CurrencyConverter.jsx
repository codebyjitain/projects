import { useState, useEffect } from 'react';
import { ArrowRightLeft, RefreshCw, Star, Clock, Check } from 'lucide-react';
import Navbar from './Navbar';

export default function CurrencyConverter() {
  // List of available currencies with their codes, names and symbols
  const currencies = {
    USD: { name: "US Dollar", symbol: "$", flag: "🇺🇸" },
    EUR: { name: "Euro", symbol: "€", flag: "🇪🇺" },
    GBP: { name: "British Pound", symbol: "£", flag: "🇬🇧" },
    JPY: { name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
    AUD: { name: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
    CAD: { name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
    CHF: { name: "Swiss Franc", symbol: "CHF", flag: "🇨🇭" },
    CNY: { name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
    SEK: { name: "Swedish Krona", symbol: "kr", flag: "🇸🇪" },
    NZD: { name: "New Zealand Dollar", symbol: "NZ$", flag: "🇳🇿" },
    MXN: { name: "Mexican Peso", symbol: "$", flag: "🇲🇽" },
    SGD: { name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬" },
    HKD: { name: "Hong Kong Dollar", symbol: "HK$", flag: "🇭🇰" },
    NOK: { name: "Norwegian Krone", symbol: "kr", flag: "🇳🇴" },
    KRW: { name: "South Korean Won", symbol: "₩", flag: "🇰🇷" },
    TRY: { name: "Turkish Lira", symbol: "₺", flag: "🇹🇷" },
    RUB: { name: "Russian Ruble", symbol: "₽", flag: "🇷🇺" },
    INR: { name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
    BRL: { name: "Brazilian Real", symbol: "R$", flag: "🇧🇷" },
    ZAR: { name: "South African Rand", symbol: "R", flag: "🇿🇦" },
    PHP: { name: "Philippine Peso", symbol: "₱", flag: "🇵🇭" },
    CZK: { name: "Czech Koruna", symbol: "Kč", flag: "🇨🇿" },
    IDR: { name: "Indonesian Rupiah", symbol: "Rp", flag: "🇮🇩" },
    MYR: { name: "Malaysian Ringgit", symbol: "RM", flag: "🇲🇾" },
    HUF: { name: "Hungarian Forint", symbol: "Ft", flag: "🇭🇺" },
    ISK: { name: "Icelandic Króna", symbol: "kr", flag: "🇮🇸" },
    THB: { name: "Thai Baht", symbol: "฿", flag: "🇹🇭" },
    PLN: { name: "Polish Złoty", symbol: "zł", flag: "🇵🇱" },
    DKK: { name: "Danish Krone", symbol: "kr", flag: "🇩🇰" },
    // AED: { name: "United Arab Emirates Dirham", symbol: "د.إ", flag: "🇦🇪" },
    ARS: { name: "Argentine Peso", symbol: "$", flag: "🇦🇷" },
    CLP: { name: "Chilean Peso", symbol: "$", flag: "🇨🇱" },
    EGP: { name: "Egyptian Pound", symbol: "£", flag: "🇪🇬" },
    ILS: { name: "Israeli New Shekel", symbol: "₪", flag: "🇮🇱" },
    SAR: { name: "Saudi Riyal", symbol: "﷼", flag: "🇸🇦" },
    QAR: { name: "Qatari Riyal", symbol: "﷼", flag: "🇶🇦" },
    COP: { name: "Colombian Peso", symbol: "$", flag: "🇨🇴" },
    TWD: { name: "New Taiwan Dollar", symbol: "NT$", flag: "🇹🇼" },
    AED: { name: "UAE Dirham", symbol: "د.إ", flag: "🇦🇪" },
    BGN: { name: "Bulgarian Lev", symbol: "лв", flag: "🇧🇬" },
    HRK: { name: "Croatian Kuna", symbol: "kn", flag: "🇭🇷" },
    MUR: { name: "Mauritian Rupee", symbol: "₨", flag: "🇲🇺" },
    RON: { name: "Romanian Leu", symbol: "lei", flag: "🇷🇴" },
    VND: { name: "Vietnamese Dong", symbol: "₫", flag: "🇻🇳" },
    NGN: { name: "Nigerian Naira", symbol: "₦", flag: "🇳🇬" },
    PKR: { name: "Pakistani Rupee", symbol: "₨", flag: "🇵🇰" },
    BDT: { name: "Bangladeshi Taka", symbol: "৳", flag: "🇧🇩" },
    KES: { name: "Kenyan Shilling", symbol: "KSh", flag: "🇰🇪" },
    GHS: { name: "Ghanaian Cedi", symbol: "₵", flag: "🇬🇭" },
  };

  // List of popular currencies to show at the top
  const popularCurrencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "INR", "CNY"];

  // Initial state
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock exchange rates (in a real app, you'd fetch this from an API)
  useEffect(() => {
    // Simulating API fetch delay
    setLoading(true);
    setTimeout(() => {
      // This is mock data - in a real app, this would come from an API
      const mockRates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.78,
        JPY: 150.12,
        AUD: 1.51,
        CAD: 1.36,
        CHF: 0.89,
        CNY: 7.23,
        SEK: 10.47,
        NZD: 1.66,
        MXN: 16.72,
        SGD: 1.34,
        HKD: 7.81,
        NOK: 10.73,
        KRW: 1342.34,
        TRY: 32.12,
        RUB: 90.23,
        INR: 83.2,
        BRL: 5.06,
        ZAR: 18.23,
        PHP: 56.78,
        CZK: 23.21,
        IDR: 15678.45,
        MYR: 4.67,
        HUF: 354.12,
        ISK: 138.56,
        THB: 35.24,
        PLN: 3.95,
        DKK: 6.89,
        AED: 3.67,
        ARS: 872.44,
        CLP: 927.23,
        EGP: 47.85,
        ILS: 3.68,
        SAR: 3.75,
        QAR: 3.64,
        COP: 3912.78,
        TWD: 32.15,
        BGN: 1.8,
        HRK: 7.02,
        MUR: 45.67,
        RON: 4.56,
        VND: 25123.45,
        NGN: 1456.78,
        PKR: 278.34,
        BDT: 109.67,
        KES: 128.9,
        GHS: 15.67,
      };

      setExchangeRates(mockRates);
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  }, []);

  // Convert currency
  useEffect(() => {
    if (!loading && exchangeRates) {
      convertCurrency();
    }
  }, [fromCurrency, toCurrency, amount, exchangeRates, loading]);

  const convertCurrency = () => {
    if (!amount || isNaN(parseFloat(amount))) {
      setConvertedAmount('');
      return;
    }

    try {
      const fromRate = exchangeRates[fromCurrency];
      const toRate = exchangeRates[toCurrency];

      if (fromRate && toRate) {
        const result = (parseFloat(amount) / fromRate) * toRate;
        setConvertedAmount(result.toFixed(6));

        // Add to history
        const newConversion = {
          id: Date.now(),
          fromCurrency,
          toCurrency,
          amount: parseFloat(amount),
          result: result.toFixed(6),
          timestamp: new Date()
        };

        setHistory(prev => {
          const updatedHistory = [newConversion, ...prev.slice(0, 9)];
          return updatedHistory;
        });
      } else {
        setError('Exchange rate not available for selected currencies');
      }
    } catch (err) {
      setError('Error converting currency');
    }
  };

  // Handle amount change
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Handle from currency change
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  // Handle to currency change
  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  // Swap currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Toggle favorite currency pair
  const toggleFavorite = () => {
    const pair = `${fromCurrency}-${toCurrency}`;
    if (favorites.includes(pair)) {
      setFavorites(favorites.filter(item => item !== pair));
    } else {
      setFavorites([...favorites, pair]);
    }
  };

  // Check if current pair is favorited
  const isFavorite = () => {
    return favorites.includes(`${fromCurrency}-${toCurrency}`);
  };

  // Load a saved conversion
  const loadConversion = (conversion) => {
    setFromCurrency(conversion.fromCurrency);
    setToCurrency(conversion.toCurrency);
    setAmount(conversion.amount.toString());
  };

  // Filter currencies based on search query
  const filteredCurrencies = Object.keys(currencies).filter(code => {
    const currency = currencies[code];
    return code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currency.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Format time relative to now (e.g. "5 mins ago")
  const formatRelativeTime = (date) => {
    if (!date) return '';

    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  // Format date for display
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) +
      ' ' + date.toLocaleDateString();
  };

  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div className="bg-gray-50 min-h-screen p-4">
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Currency Converter</h1>

          {/* Main Converter Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            {/* Last Updated Info */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500">
                {loading ? 'Updating rates...' : (
                  <>
                    <span className="inline-flex items-center">
                      <RefreshCw size={14} className="mr-1" />
                      Last updated: {formatRelativeTime(lastUpdated)}
                    </span>
                  </>
                )}
              </div>
              <button
                onClick={toggleFavorite}
                className={`flex items-center text-sm ${isFavorite() ? 'text-yellow-500' : 'text-gray-400'}`}
              >
                <Star size={16} className="mr-1" fill={isFavorite() ? "currentColor" : "none"} />
                {isFavorite() ? 'Favorited' : 'Add to favorites'}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
                {error}
              </div>
            )}

            {/* Conversion Interface */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-6">
              {/* From Amount */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">{currencies[fromCurrency]?.symbol}</span>
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">{fromCurrency}</span>
                  </div>
                </div>
              </div>

              {/* From Currency */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <div className="relative">
                  <select
                    className="block w-full pl-8 pr-10 py-2 text-base border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                  >
                    {Object.keys(currencies).map(code => (
                      <option key={`from-${code}`} value={code}>
                        {currencies[code].name} ({code})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <span>{currencies[fromCurrency]?.flag}</span>
                  </div>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center items-center">
                <button
                  onClick={swapCurrencies}
                  className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                  aria-label="Swap currencies"
                >
                  <ArrowRightLeft size={24} />
                </button>
              </div>

              {/* To Amount */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Converted Amount</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">{currencies[toCurrency]?.symbol}</span>
                  </div>
                  <div className="block w-full pl-10 pr-12 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700">
                    {loading ? 'Loading...' : (convertedAmount || '0')}
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">{toCurrency}</span>
                  </div>
                </div>
              </div>

              {/* To Currency */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="relative">
                  <select
                    className="block w-full pl-8 pr-10 py-2 text-base border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={toCurrency}
                    onChange={handleToCurrencyChange}
                  >
                    {Object.keys(currencies).map(code => (
                      <option key={`to-${code}`} value={code}>
                        {currencies[code].name} ({code})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <span>{currencies[toCurrency]?.flag}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Result Text */}
            <div className="text-center text-gray-700 p-4 bg-gray-50 rounded-md">
              {loading ? (
                <p>Loading current exchange rates...</p>
              ) : (
                <p>
                  <span className="font-medium">{amount} {fromCurrency}</span> = <span className="font-bold">{convertedAmount} {toCurrency}</span>
                  <br />
                  <span className="text-sm text-gray-500">
                    1 {fromCurrency} = {(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(6)} {toCurrency}
                  </span>
                </p>
              )}
            </div>
          </div>

          {/* Currency Selector Tabs */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="border-b border-gray-200 mb-4">
              <div className="flex -mb-px">
                <button
                  className={`mr-4 py-2 px-4 font-medium ${activeTab === 'popular'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('popular')}
                >
                  Popular
                </button>
                <button
                  className={`mr-4 py-2 px-4 font-medium ${activeTab === 'all'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('all')}
                >
                  All Currencies
                </button>
                <button
                  className={`mr-4 py-2 px-4 font-medium ${activeTab === 'favorites'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('favorites')}
                >
                  Favorites
                </button>
                <button
                  className={`py-2 px-4 font-medium ${activeTab === 'history'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('history')}
                >
                  History
                </button>
              </div>
            </div>

            {/* Search (for All Currencies tab) */}
            {activeTab === 'all' && (
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search currencies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            )}

            {/* Popular Currencies */}
            {activeTab === 'popular' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {popularCurrencies.map(code => (
                  <button
                    key={code}
                    className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                    onClick={() => setToCurrency(code)}
                  >
                    <span className="mr-2 text-lg">{currencies[code]?.flag}</span>
                    <div className="text-left">
                      <div className="font-medium">{code}</div>
                      <div className="text-xs text-gray-500">{currencies[code]?.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* All Currencies */}
            {activeTab === 'all' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-64 overflow-y-auto">
                {filteredCurrencies.map(code => (
                  <button
                    key={code}
                    className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                    onClick={() => setToCurrency(code)}
                  >
                    <span className="mr-2 text-lg">{currencies[code]?.flag}</span>
                    <div className="text-left">
                      <div className="font-medium">{code}</div>
                      <div className="text-xs text-gray-500 truncate">{currencies[code]?.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Favorites */}
            {activeTab === 'favorites' && (
              <div>
                {favorites.length === 0 ? (
                  <p className="text-center text-gray-500 py-6">No favorite currency pairs yet.</p>
                ) : (
                  <div className="space-y-3">
                    {favorites.map(pair => {
                      const [from, to] = pair.split('-');
                      return (
                        <div
                          key={pair}
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setFromCurrency(from);
                            setToCurrency(to);
                          }}
                        >
                          <div className="flex items-center">
                            <span className="mr-2">{currencies[from]?.flag}</span>
                            <span>{from}</span>
                            <span className="mx-2">→</span>
                            <span className="mr-2">{currencies[to]?.flag}</span>
                            <span>{to}</span>
                          </div>
                          <span className="text-sm text-gray-500">
                            1 {from} = {(exchangeRates[to] / exchangeRates[from]).toFixed(4)} {to}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* History */}
            {activeTab === 'history' && (
              <div>
                {history.length === 0 ? (
                  <p className="text-center text-gray-500 py-6">No conversion history yet.</p>
                ) : (
                  <div className="space-y-3">
                    {history.map(item => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                        onClick={() => loadConversion(item)}
                      >
                        <div>
                          <div className="flex items-center">
                            <span className="mr-1">{currencies[item.fromCurrency]?.flag}</span>
                            <span className="font-medium">{item.amount} {item.fromCurrency}</span>
                            <span className="mx-2">→</span>
                            <span className="mr-1">{currencies[item.toCurrency]?.flag}</span>
                            <span className="font-medium">{item.result} {item.toCurrency}</span>
                          </div>
                          <div className="text-xs text-gray-500">{formatDate(item.timestamp)}</div>
                        </div>
                        <Clock size={14} className="text-gray-400" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}