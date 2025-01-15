import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "The best investment platform I've ever used. Simple yet powerful.",
      author: "Sarah Johnson",
      role: "Small Business Owner",
    },
    {
      quote: "Their expert guidance helped me achieve my financial goals faster.",
      author: "Michael Chen",
      role: "Software Engineer",
    },
    {
      quote: "Outstanding portfolio performance and excellent customer service.",
      author: "Emma Davis",
      role: "Marketing Director",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
          What Our Investors Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <p className="text-lg mb-4 text-gray-700">"{testimonial.quote}"</p>
                <div className="text-primary-dark font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};