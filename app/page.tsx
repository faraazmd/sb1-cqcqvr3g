import { BookingForm } from './components/booking/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Book Your Ride</h1>
            <p className="text-muted-foreground">
              Fast, reliable, and comfortable cab service at your fingertips
            </p>
          </div>
          
          <BookingForm />
        </div>
      </div>
    </main>
  );
}