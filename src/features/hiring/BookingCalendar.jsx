import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const BookingCalendar = ({ isLight }) => {
  // --- STATE ---
  const [currentViewDate, setCurrentViewDate] = useState(new Date());
  const [selectedDateObj, setSelectedDateObj] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Current real date for validation
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to compare dates only

  // --- CALENDAR LOGIC ---
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // ✅ CHECK: Is the view currently on the real current month?
  const isCurrentMonth = 
    currentViewDate.getMonth() === today.getMonth() && 
    currentViewDate.getFullYear() === today.getFullYear();

  const handlePrevMonth = () => {
    // Prevent going back if we are already on the current month
    if (isCurrentMonth) return;
    setCurrentViewDate(new Date(currentViewDate.getFullYear(), currentViewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentViewDate(new Date(currentViewDate.getFullYear(), currentViewDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth(), day);
    
    // Prevent clicking past dates
    if (clickedDate < today) return;

    setSelectedDateObj(clickedDate);
    setSelectedTime(null);
  };

  // Grid Data
  const daysInMonth = getDaysInMonth(currentViewDate);
  const startDay = getFirstDayOfMonth(currentViewDate);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptySlots = Array.from({ length: startDay });

  // Formatting
  const monthName = currentViewDate.toLocaleString('default', { month: 'long' });
  const year = currentViewDate.getFullYear();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Mock Time Slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM", 
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"
  ];

  // --- FORM HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!selectedDateObj || !selectedTime || !formData.name || !formData.email) return;
    
    const dateStr = selectedDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    alert(`Booking Confirmed!\n\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${dateStr}\nTime: ${selectedTime}`);
  };

  // Helper to check selection
  const isSelected = (day) => {
    return selectedDateObj && 
           selectedDateObj.getDate() === day && 
           selectedDateObj.getMonth() === currentViewDate.getMonth() && 
           selectedDateObj.getFullYear() === currentViewDate.getFullYear();
  };

  // ✅ Helper to check if a day is in the past
  const isPastDate = (day) => {
    const checkDate = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth(), day);
    return checkDate < today;
  };

  return (
    <div className={`
      w-full max-w-6xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border flex flex-col lg:flex-row min-h-[750px]
      ${isLight ? "bg-white border-slate-200 shadow-blue-900/5" : "bg-[#111] border-[#333] shadow-black/50"}
    `}>
      
      {/* LEFT SIDE: Calendar Grid */}
      <div className="w-full lg:w-3/5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-[#222]">
         
         {/* Month Navigation */}
         <div className="flex justify-between items-center mb-8">
            <h3 className={`text-2xl font-bold ${isLight ? "text-slate-900" : "text-white"}`}>
               {monthName} {year}
            </h3>
            <div className="flex gap-2">
               {/* ✅ PREVIOUS BUTTON (Disabled if current month) */}
               <button 
                 onClick={handlePrevMonth}
                 disabled={isCurrentMonth}
                 className={`
                    p-3 rounded-full transition-colors 
                    ${isCurrentMonth 
                        ? "opacity-30 cursor-not-allowed text-gray-400" 
                        : isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-[#222] text-gray-400"
                    }
                 `}
               >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
               </button>
               
               {/* NEXT BUTTON */}
               <button 
                 onClick={handleNextMonth}
                 className={`p-3 rounded-full transition-colors ${isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-[#222] text-gray-400"}`}
               >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
               </button>
            </div>
         </div>

         {/* Days Header */}
         <div className="grid grid-cols-7 mb-4 text-center">
            {dayNames.map(d => (
               <span key={d} className={`text-xs font-bold uppercase tracking-wider ${isLight?"text-slate-400":"text-gray-600"}`}>{d}</span>
            ))}
         </div>

         {/* Dates Grid */}
         <div className="grid grid-cols-7 gap-3 md:gap-4">
            {emptySlots.map((_, i) => <div key={`empty-${i}`} className="aspect-square"></div>)}

            {daysArray.map(d => {
               const isDisabled = isPastDate(d);
               return (
                  <button 
                    key={d} 
                    onClick={() => !isDisabled && handleDateClick(d)}
                    disabled={isDisabled}
                    className={`
                      aspect-square rounded-2xl flex items-center justify-center text-lg font-medium transition-all duration-200
                      ${isDisabled 
                        ? "opacity-20 cursor-not-allowed" // ✅ Past dates grayed out
                        : isSelected(d)
                            ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-105" 
                            : `hover:bg-blue-50 dark:hover:bg-blue-900/10 ${isLight ? "text-slate-700 bg-slate-50" : "text-gray-300 bg-[#1a1a1a]"}`
                      }
                    `}
                  >
                    {d}
                  </button>
               );
            })}
         </div>
         
         <div className={`mt-8 text-sm flex items-center gap-4 ${isLight ? "text-slate-500" : "text-gray-500"}`}>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-600"></span> Selected</div>
            <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${isLight?"bg-slate-200":"bg-[#333]"}`}></span> Available</div>
            <div className="flex items-center gap-2 opacity-50"><span className={`w-2 h-2 rounded-full border ${isLight?"border-slate-300":"border-[#444]"}`}></span> Past</div>
         </div>
      </div>

      {/* RIGHT SIDE: Time & Form */}
      <div className={`w-full lg:w-2/5 p-8 md:p-12 flex flex-col ${isLight ? "bg-slate-50/50" : "bg-[#161616]"}`}>
         
         {/* 1. Time Slots */}
         <div className="mb-8">
            <h4 className={`text-lg font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
               Available Times 
               {selectedDateObj && (
                 <span className="text-blue-500 ml-2 text-sm">
                   ({selectedDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})
                 </span>
               )}
            </h4>
            
            <div className={`
              grid grid-cols-2 gap-3 transition-opacity duration-300
              ${!selectedDateObj ? "opacity-40 pointer-events-none grayscale" : "opacity-100"}
            `}>
               {timeSlots.map(time => (
                  <button 
                     key={time}
                     onClick={() => setSelectedTime(time)}
                     className={`
                        py-3 px-4 rounded-xl text-sm font-bold border transition-all
                        ${selectedTime === time 
                           ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-[1.02]" 
                           : isLight ? "bg-white border-slate-200 hover:border-blue-400 text-slate-600" : "bg-[#222] border-[#333] hover:border-blue-500 text-gray-300"
                        }
                     `}
                  >
                     {time}
                  </button>
               ))}
            </div>
         </div>

         {/* 2. User Details Form */}
         <div className={`
            flex-grow flex flex-col justify-end transition-all duration-300
            ${!selectedTime ? "opacity-50 pointer-events-none blur-[1px]" : "opacity-100 blur-0"}
         `}>
            <h4 className={`text-lg font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>Your Details</h4>
            
            <div className="space-y-4 mb-6">
               <div>
                  <label className={`block text-xs font-bold mb-1.5 uppercase ${isLight ? "text-slate-500" : "text-gray-500"}`}>Full Name</label>
                  <input 
                     type="text" 
                     name="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     placeholder="Enter your full name"
                     className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isLight ? "bg-white border-slate-200 text-slate-900" : "bg-[#222] border-[#333] text-white"}`} 
                  />
               </div>
               <div>
                  <label className={`block text-xs font-bold mb-1.5 uppercase ${isLight ? "text-slate-500" : "text-gray-500"}`}>Email</label>
                  <input 
                     type="email" 
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     placeholder="Enter your email address"
                     className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isLight ? "bg-white border-slate-200 text-slate-900" : "bg-[#222] border-[#333] text-white"}`} 
                  />
               </div>
            </div>

            <Button 
               text={selectedDateObj && selectedTime ? `Confirm for ${selectedDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${selectedTime}` : "Select Date & Time"}
               onClick={handleSubmit}
               disabled={!selectedDateObj || !selectedTime || !formData.name || !formData.email}
               layout_width="100%"
               padding="16px"
               fill_background="linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)"
               text_color="#fff"
               className={`shadow-xl shadow-blue-500/20 ${(!selectedDateObj || !selectedTime || !formData.name || !formData.email) ? "opacity-50 cursor-not-allowed" : ""}`}
            />
         </div>

      </div>
    </div>
  );
};

export default BookingCalendar;