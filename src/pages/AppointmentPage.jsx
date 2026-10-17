import { useState, useEffect, useCallback } from 'react';
import PageBanner from '../components/PageBanner';
import AlertMessage from '../components/AlertMessage';
import { appointmentService } from '../api/services/appointmentService';

const BASE_SLOTS = [
  '8:00 AM','8:30 AM','9:00 AM','9:30 AM','10:00 AM','10:30 AM',
  '11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM',
  '2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM',
];

function formatKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function AppointmentPage() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [slots, setSlots] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [availabilityCache, setAvailabilityCache] = useState({});

  const [form, setForm] = useState({
    name: '', email: '', phone: '', company_name: '',
    select_market: '', role_hiring_requirement: '',
    service_type: '', preferred_expert: '', message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const loadAvailability = useCallback(async (date) => {
    const key = formatKey(date);
    if (availabilityCache[key]) {
      setSlots(availabilityCache[key]);
      return;
    }
    setSlotsLoading(true);
    const { data } = await appointmentService.getAvailability(key);
    const slotList = data?.slots || BASE_SLOTS.map((t) => ({ time: t, available: true }));
    setAvailabilityCache((prev) => ({ ...prev, [key]: slotList }));
    setSlots(slotList);
    setSlotsLoading(false);
  }, [availabilityCache]);

  useEffect(() => {
    if (selectedDate) {
      loadAvailability(selectedDate);
    }
  }, [selectedDate]);

  // Calendar rendering
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevLastDate = new Date(year, month, 0).getDate();
  const monthLabel = currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' });

  const prevDays = Array.from({ length: firstDay }, (_, i) => prevLastDate - firstDay + i + 1);
  const currDays = Array.from({ length: lastDate }, (_, i) => i + 1);
  const totalDays = firstDay + lastDate;
  const nextDays = Array.from({ length: (7 - (totalDays % 7)) % 7 }, (_, i) => i + 1);

  const isToday = (d) =>
    d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  const isSelected = (d) =>
    selectedDate &&
    d === selectedDate.getDate() &&
    month === selectedDate.getMonth() &&
    year === selectedDate.getFullYear();

  const selectDay = (d) => {
    const date = new Date(year, month, d);
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setStatus({ type: 'error', message: 'Please pick a date and a time slot from the calendar.' });
      return;
    }
    setLoading(true);
    setStatus({ type: '', message: '' });
    const payload = {
      ...form,
      appointment_date: formatKey(selectedDate),
      appointment_time: selectedTime,
    };
    const { data, error } = await appointmentService.book(payload);
    setLoading(false);
    if (error) {
      setStatus({ type: 'error', message: error });
    } else {
      setStatus({ type: 'success', message: 'Your appointment has been scheduled. We will contact you soon.' });
      setForm({ name: '', email: '', phone: '', company_name: '', select_market: '', role_hiring_requirement: '', service_type: '', preferred_expert: '', message: '' });
      setSelectedTime('');
      // Refresh slots
      const key = formatKey(selectedDate);
      setAvailabilityCache((prev) => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
      loadAvailability(selectedDate);
    }
  };

  return (
    <>
      <PageBanner
        title="Book An Appointment"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Book An Appointment' }]}
        bannerImage="page-banner14.jpg"
      />

      <div className="outsourcing-appointment-area ptb-120">
        <div className="container">
          <div className="row justify-content-center g-4">
            {/* Calendar */}
            <div className="col-lg-5 col-md-12">
              <div className="appointment-calendar">
                <div className="calendar-header">
                  <button id="prev-wrap" onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>
                    <i className="ri-arrow-left-s-line" />
                  </button>
                  <span id="month-year">{monthLabel}</span>
                  <button id="next-wrap" onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>
                    <i className="ri-arrow-right-s-line" />
                  </button>
                </div>
                <div className="calendar-days-header">
                  {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
                    <div key={d}>{d}</div>
                  ))}
                </div>
                <div className="days" id="days">
                  {prevDays.map((d) => <div key={`p${d}`} className="prev-date">{d}</div>)}
                  {currDays.map((d) => (
                    <div
                      key={`c${d}`}
                      className={`curr-date${isToday(d) && !selectedDate ? ' active' : ''}${isSelected(d) ? ' active' : ''}`}
                      onClick={() => selectDay(d)}
                    >{d}</div>
                  ))}
                  {nextDays.map((d) => <div key={`n${d}`} className="next-date">{d}</div>)}
                </div>
              </div>

              {/* Time Slots */}
              <div className="appointment-slots">
                <h5 id="time-title">
                  {selectedDate
                    ? `Available Times - ${selectedDate.getDate()} ${monthLabel}`
                    : 'Select A Date'}
                </h5>
                <div id="slots" className="slots">
                  {slotsLoading ? (
                    <p>Loading slots...</p>
                  ) : selectedDate ? (
                    slots.length > 0 ? slots.map((s) => (
                      <div
                        key={s.time}
                        className={`slot${!s.available ? ' booked' : ''}${selectedTime === s.time ? ' active' : ''}`}
                        aria-disabled={!s.available}
                        onClick={() => {
                          if (s.available) setSelectedTime(s.time);
                        }}
                      >
                        {s.time}
                      </div>
                    )) : <p className="no-slots">No slots available for this date.</p>
                  ) : null}
                </div>
                {selectedDate && selectedTime && (
                  <div className="appt-slot-display" id="apptSlotDisplay" style={{ marginTop: '12px', fontWeight: 'bold', color: 'var(--main-color)' }}>
                    Selected: {formatKey(selectedDate)} at {selectedTime}
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-7 col-md-12">
              <div className="appointment-form-wrap">
                <div className="content">
                  <h3>Book Your Appointment</h3>
                  <p>Fill in your details and select a date and time slot to schedule your appointment.</p>
                </div>
                <form id="appointmentForm" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input type="text" className="form-control" name="name" value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Email Address *</label>
                        <input type="email" className="form-control" name="email" value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="Your email" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" name="phone" value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+1 555 000 0000" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" className="form-control" name="company_name" value={form.company_name}
                          onChange={(e) => setForm({ ...form, company_name: e.target.value })}
                          placeholder="Your company" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Select Market</label>
                        <select className="form-select form-control" name="select_market" value={form.select_market}
                          onChange={(e) => setForm({ ...form, select_market: e.target.value })}>
                          <option value="">Select an Option</option>
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Service Type</label>
                        <select className="form-select form-control" name="service_type" value={form.service_type}
                          onChange={(e) => setForm({ ...form, service_type: e.target.value })}>
                          <option value="">Select an Option</option>
                          <option value="for_employers">For Employers</option>
                          <option value="for_candidates">For Candidates</option>
                          <option value="hr_consulting">HR Consulting</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>I'm Interested In</label>
                        <select className="form-select form-control" name="role_hiring_requirement" value={form.role_hiring_requirement}
                          onChange={(e) => setForm({ ...form, role_hiring_requirement: e.target.value })}>
                          <option value="">Select an Option</option>
                          <option value="us_staffing">US Staffing/Recruitment</option>
                          <option value="uk_recruitment">UK Recruitment Support</option>
                          <option value="candidate_marketing">Candidate Marketing</option>
                          <option value="interview_prep">Interview Scheduling & Prep</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Preferred Expert</label>
                        <input type="text" className="form-control" name="preferred_expert" value={form.preferred_expert}
                          onChange={(e) => setForm({ ...form, preferred_expert: e.target.value })}
                          placeholder="Preferred consultant (optional)" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" name="message" value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your requirements..." />
                      </div>
                    </div>
                    {status.message && (
                      <div className="col-12">
                        <AlertMessage type={status.type} message={status.message} />
                      </div>
                    )}
                    <div className="col-12">
                      <button type="submit" className="default-btn" disabled={loading}>
                        {loading ? 'Booking...' : 'Book Appointment'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
