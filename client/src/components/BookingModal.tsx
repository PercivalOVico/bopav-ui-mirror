import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { Calendar as CalendarIcon, Clock, User } from "lucide-react";

interface BookingModalProps {
  serviceName: string;
  servicePrice: string;
  serviceDuration: string;
  businessName: string;
  children: React.ReactNode;
}

export const BookingModal = ({ serviceName, servicePrice, serviceDuration, businessName, children }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select date and time",
        description: "Both date and time are required to book an appointment.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking confirmed!",
      description: `Your appointment for ${serviceName} has been booked for ${selectedDate.toDateString()} at ${selectedTime}.`,
    });
    
    setIsOpen(false);
    console.log("Booking details:", {
      service: serviceName,
      date: selectedDate,
      time: selectedTime,
      notes,
      business: businessName
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gray-800 border border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">
            Book Appointment
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Service Details */}
          <Card className="bg-gray-700/50 border border-gray-600">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">{serviceName}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    {serviceDuration}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <User className="h-3 w-3" />
                    {businessName}
                  </p>
                </div>
                <div className="text-purple-400 font-bold text-lg">{servicePrice}</div>
              </div>
            </CardContent>
          </Card>

          {/* Date Selection */}
          <div>
            <h4 className="font-medium text-white mb-3 flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              Select Date
            </h4>
            <Card className="bg-gray-700/50 border border-gray-600">
              <CardContent className="p-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border-0"
                />
              </CardContent>
            </Card>
          </div>

          {/* Time Selection */}
          <div>
            <h4 className="font-medium text-white mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Select Time
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTime(time)}
                  className={`${
                    selectedTime === time 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <h4 className="font-medium text-white mb-3">Additional Notes (Optional)</h4>
            <Textarea
              placeholder="Any special requests or notes for your appointment..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleBooking}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
            >
              Confirm Booking
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
