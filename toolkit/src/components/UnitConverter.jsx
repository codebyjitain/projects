import { useState } from 'react';
import { ArrowRightLeft, Check } from 'lucide-react';
import Navbar from './Navbar';

export default function UnitConverter() {
  // Conversion categories and their units
  const conversionCategories = {
    length: {
      name: "Length",
      units: {
        meter: { name: "Meter (m)", ratio: 1 },
        kilometer: { name: "Kilometer (km)", ratio: 1000 },
        centimeter: { name: "Centimeter (cm)", ratio: 0.01 },
        millimeter: { name: "Millimeter (mm)", ratio: 0.001 },
        micrometer: { name: "Micrometer (μm)", ratio: 0.000001 },
        nanometer: { name: "Nanometer (nm)", ratio: 0.000000001 },
        mile: { name: "Mile (mi)", ratio: 1609.344 },
        yard: { name: "Yard (yd)", ratio: 0.9144 },
        foot: { name: "Foot (ft)", ratio: 0.3048 },
        inch: { name: "Inch (in)", ratio: 0.0254 },
        nauticalMile: { name: "Nautical Mile", ratio: 1852 }
      }
    },
    weight: {
      name: "Weight/Mass",
      units: {
        kilogram: { name: "Kilogram (kg)", ratio: 1 },
        gram: { name: "Gram (g)", ratio: 0.001 },
        milligram: { name: "Milligram (mg)", ratio: 0.000001 },
        metricTon: { name: "Metric Ton (t)", ratio: 1000 },
        pound: { name: "Pound (lb)", ratio: 0.45359237 },
        ounce: { name: "Ounce (oz)", ratio: 0.028349523125 },
        carat: { name: "Carat", ratio: 0.0002 },
        stone: { name: "Stone (st)", ratio: 6.35029318 }
      }
    },
    volume: {
      name: "Volume",
      units: {
        liter: { name: "Liter (L)", ratio: 1 },
        milliliter: { name: "Milliliter (mL)", ratio: 0.001 },
        cubicMeter: { name: "Cubic Meter (m³)", ratio: 1000 },
        cubicCentimeter: { name: "Cubic Centimeter (cm³)", ratio: 0.001 },
        gallon: { name: "Gallon (US)", ratio: 3.78541178 },
        quart: { name: "Quart (US)", ratio: 0.946352946 },
        pint: { name: "Pint (US)", ratio: 0.473176473 },
        cup: { name: "Cup (US)", ratio: 0.2365882365 },
        fluidOunce: { name: "Fluid Ounce (US)", ratio: 0.0295735295625 },
        tablespoon: { name: "Tablespoon (US)", ratio: 0.01478676478125 },
        teaspoon: { name: "Teaspoon (US)", ratio: 0.00492892159375 }
      }
    },
    temperature: {
      name: "Temperature",
      units: {
        celsius: { name: "Celsius (°C)" },
        fahrenheit: { name: "Fahrenheit (°F)" },
        kelvin: { name: "Kelvin (K)" }
      },
      // Special conversion for temperature
      convert: (value, fromUnit, toUnit) => {
        let kelvin;

        // Convert from source unit to Kelvin
        if (fromUnit === 'celsius') {
          kelvin = parseFloat(value) + 273.15;
        } else if (fromUnit === 'fahrenheit') {
          kelvin = (parseFloat(value) + 459.67) * (5 / 9);
        } else { // kelvin
          kelvin = parseFloat(value);
        }

        // Convert from Kelvin to target unit
        if (toUnit === 'celsius') {
          return (kelvin - 273.15).toFixed(6);
        } else if (toUnit === 'fahrenheit') {
          return ((kelvin * 9 / 5) - 459.67).toFixed(6);
        } else { // kelvin
          return kelvin.toFixed(6);
        }
      }
    },
    area: {
      name: "Area",
      units: {
        squareMeter: { name: "Square Meter (m²)", ratio: 1 },
        squareKilometer: { name: "Square Kilometer (km²)", ratio: 1000000 },
        squareCentimeter: { name: "Square Centimeter (cm²)", ratio: 0.0001 },
        squareMillimeter: { name: "Square Millimeter (mm²)", ratio: 0.000001 },
        squareMile: { name: "Square Mile", ratio: 2589988.110336 },
        acre: { name: "Acre", ratio: 4046.8564224 },
        hectare: { name: "Hectare", ratio: 10000 },
        squareYard: { name: "Square Yard", ratio: 0.83612736 },
        squareFoot: { name: "Square Foot", ratio: 0.09290304 },
        squareInch: { name: "Square Inch", ratio: 0.00064516 }
      }
    },
    speed: {
      name: "Speed",
      units: {
        meterPerSecond: { name: "Meter/Second (m/s)", ratio: 1 },
        kilometerPerHour: { name: "Kilometer/Hour (km/h)", ratio: 0.277777778 },
        milePerHour: { name: "Mile/Hour (mph)", ratio: 0.44704 },
        knot: { name: "Knot", ratio: 0.514444444 },
        foot_per_second: { name: "Foot/Second", ratio: 0.3048 }
      }
    },
    time: {
      name: "Time",
      units: {
        second: { name: "Second (s)", ratio: 1 },
        millisecond: { name: "Millisecond (ms)", ratio: 0.001 },
        microsecond: { name: "Microsecond (μs)", ratio: 0.000001 },
        nanosecond: { name: "Nanosecond (ns)", ratio: 0.000000001 },
        minute: { name: "Minute (min)", ratio: 60 },
        hour: { name: "Hour (h)", ratio: 3600 },
        day: { name: "Day (d)", ratio: 86400 },
        week: { name: "Week", ratio: 604800 },
        month: { name: "Month (30 days)", ratio: 2592000 },
        year: { name: "Year (365 days)", ratio: 31536000 }
      }
    },
    digital: {
      name: "Digital Storage",
      units: {
        bit: { name: "Bit", ratio: 1 / 8388608 },
        byte: { name: "Byte", ratio: 1 / 1048576 },
        kilobyte: { name: "Kilobyte (KB)", ratio: 1 / 1024 },
        megabyte: { name: "Megabyte (MB)", ratio: 1 },
        gigabyte: { name: "Gigabyte (GB)", ratio: 1024 },
        terabyte: { name: "Terabyte (TB)", ratio: 1048576 },
        petabyte: { name: "Petabyte (PB)", ratio: 1073741824 }
      }
    },
    fuel: {
      name: "Fuel Economy",
      units: {
        mpg_us: { name: "Miles/Gallon (US)", ratio: 1 },
        mpg_uk: { name: "Miles/Gallon (UK)", ratio: 1.20095 },
        km_per_liter: { name: "Kilometer/Liter", ratio: 0.425144 },
        liter_per_100km: { name: "Liter/100 Kilometers", convert: v => 235.214583 / v }
      },
      // Special conversion for fuel economy
      convert: (value, fromUnit, toUnit) => {
        if (fromUnit === "liter_per_100km" && toUnit === "liter_per_100km") {
          return value;
        } else if (fromUnit === "liter_per_100km") {
          const mpgUS = 235.214583 / parseFloat(value);
          const toUnitRatio = conversionCategories.fuel.units[toUnit].ratio;
          return (mpgUS * toUnitRatio).toFixed(6);
        } else if (toUnit === "liter_per_100km") {
          const fromUnitRatio = conversionCategories.fuel.units[fromUnit].ratio;
          const mpgUS = parseFloat(value) / fromUnitRatio;
          return (235.214583 / mpgUS).toFixed(6);
        } else {
          const fromUnitRatio = conversionCategories.fuel.units[fromUnit].ratio;
          const toUnitRatio = conversionCategories.fuel.units[toUnit].ratio;
          return ((parseFloat(value) / fromUnitRatio) * toUnitRatio).toFixed(6);
        }
      }
    },
    pressure: {
      name: "Pressure",
      units: {
        pascal: { name: "Pascal (Pa)", ratio: 1 },
        kilopascal: { name: "Kilopascal (kPa)", ratio: 1000 },
        bar: { name: "Bar", ratio: 100000 },
        psi: { name: "PSI", ratio: 6894.75729 },
        atmosphere: { name: "Atmosphere (atm)", ratio: 101325 },
        torr: { name: "Torr", ratio: 133.322 },
        mmHg: { name: "mmHg", ratio: 133.322 }
      }
    },
    energy: {
      name: "Energy",
      units: {
        joule: { name: "Joule (J)", ratio: 1 },
        kilojoule: { name: "Kilojoule (kJ)", ratio: 1000 },
        calorie: { name: "Calorie", ratio: 4.184 },
        kilocalorie: { name: "Kilocalorie", ratio: 4184 },
        wattHour: { name: "Watt-hour (Wh)", ratio: 3600 },
        kilowattHour: { name: "Kilowatt-hour (kWh)", ratio: 3600000 },
        electronvolt: { name: "Electronvolt (eV)", ratio: 1.602176634e-19 },
        btu: { name: "BTU", ratio: 1055.06 }
      }
    },
    frequency: {
      name: "Frequency",
      units: {
        hertz: { name: "Hertz (Hz)", ratio: 1 },
        kilohertz: { name: "Kilohertz (kHz)", ratio: 1000 },
        megahertz: { name: "Megahertz (MHz)", ratio: 1000000 },
        gigahertz: { name: "Gigahertz (GHz)", ratio: 1000000000 }
      }
    },
    angle: {
      name: "Angle",
      units: {
        degree: { name: "Degree (°)", ratio: 1 },
        radian: { name: "Radian (rad)", ratio: 57.2957795 },
        gradian: { name: "Gradian", ratio: 0.9 },
        milliradian: { name: "Milliradian", ratio: 0.0572957795 },
        minuteOfArc: { name: "Minute of Arc", ratio: 1 / 60 },
        secondOfArc: { name: "Second of Arc", ratio: 1 / 3600 }
      }
    }
  };

  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState(Object.keys(conversionCategories.length.units)[0]);
  const [toUnit, setToUnit] = useState(Object.keys(conversionCategories.length.units)[1]);
  const [inputValue, setInputValue] = useState('1');
  const [result, setResult] = useState('');
  const [recentConversions, setRecentConversions] = useState([]);

  // Handle category change
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);

    const availableUnits = Object.keys(conversionCategories[newCategory].units);
    setFromUnit(availableUnits[0]);
    setToUnit(availableUnits[1]);

    convert(inputValue, availableUnits[0], availableUnits[1], newCategory);
  };

  // Convert values
  const convert = (value, from, to, cat = category) => {
    if (!value || isNaN(parseFloat(value))) {
      setResult('');
      return;
    }

    let convertedValue;

    // Handle special conversion types
    if (conversionCategories[cat].convert) {
      convertedValue = conversionCategories[cat].convert(value, from, to);
    } else {
      // Standard ratio-based conversion
      const fromRatio = conversionCategories[cat].units[from].ratio;
      const toRatio = conversionCategories[cat].units[to].ratio;
      convertedValue = ((parseFloat(value) * fromRatio) / toRatio).toFixed(6);
    }

    setResult(convertedValue);

    // Add to recent conversions
    const newConversion = {
      id: Date.now(),
      category: cat,
      fromValue: value,
      fromUnit: from,
      toValue: convertedValue,
      toUnit: to
    };

    setRecentConversions(prev => {
      const updated = [newConversion, ...prev.slice(0, 4)];
      return updated;
    });
  };

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    convert(value, fromUnit, toUnit);
  };

  // Handle from unit change
  const handleFromUnitChange = (e) => {
    const value = e.target.value;
    setFromUnit(value);
    convert(inputValue, value, toUnit);
  };

  // Handle to unit change
  const handleToUnitChange = (e) => {
    const value = e.target.value;
    setToUnit(value);
    convert(inputValue, fromUnit, value);
  };

  // Swap units
  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    convert(inputValue, toUnit, fromUnit);
  };

  // Load a recent conversion
  const loadRecentConversion = (conversion) => {
    setCategory(conversion.category);
    setFromUnit(conversion.fromUnit);
    setToUnit(conversion.toUnit);
    setInputValue(conversion.fromValue);
    setResult(conversion.toValue);
  };

  // Format number for display
  const formatNumber = (number) => {
    if (!number) return '';
    const parsed = parseFloat(number);
    if (isNaN(parsed)) return number;

    // If it's an integer or has many decimal places
    if (Number.isInteger(parsed) || parsed.toString().includes('e')) {
      return parsed.toString();
    }

    // For regular floating point numbers, remove trailing zeros
    return parsed.toString().replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
  };

  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div className="bg-gray-50 min-h-screen p-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Unit Converter</h1>

          {/* Main Converter Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            {/* Category Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Conversion Category</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={category}
                onChange={handleCategoryChange}
              >
                {Object.keys(conversionCategories).map(cat => (
                  <option key={cat} value={cat}>
                    {conversionCategories[cat].name}
                  </option>
                ))}
              </select>
            </div>

            {/* Conversion Interface */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* From Value */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter value"
                />
              </div>

              {/* From Unit */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={fromUnit}
                  onChange={handleFromUnitChange}
                >
                  {Object.keys(conversionCategories[category].units).map(unit => (
                    <option key={unit} value={unit}>
                      {conversionCategories[category].units[unit].name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center items-center">
                <button
                  onClick={handleSwapUnits}
                  className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                  aria-label="Swap units"
                >
                  <ArrowRightLeft size={24} />
                </button>
              </div>

              {/* To Value */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700">
                  {formatNumber(result)}
                </div>
              </div>

              {/* To Unit */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={toUnit}
                  onChange={handleToUnitChange}
                >
                  {Object.keys(conversionCategories[category].units).map(unit => (
                    <option key={unit} value={unit}>
                      {conversionCategories[category].units[unit].name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Recent Conversions */}
          {recentConversions.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Conversions</h2>
              <div className="space-y-3">
                {recentConversions.map(conversion => (
                  <div
                    key={conversion.id}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                    onClick={() => loadRecentConversion(conversion)}
                  >
                    <div>
                      <p className="text-sm text-gray-600">{conversionCategories[conversion.category].name}</p>
                      <p>
                        {formatNumber(conversion.fromValue)} {conversionCategories[conversion.category].units[conversion.fromUnit].name}
                        {' '} = {' '}
                        {formatNumber(conversion.toValue)} {conversionCategories[conversion.category].units[conversion.toUnit].name}
                      </p>
                    </div>
                    <Check size={16} className="text-green-500" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}