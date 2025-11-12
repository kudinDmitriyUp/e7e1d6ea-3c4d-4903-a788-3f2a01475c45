"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import AboutFeature from "@/components/sections/about/AboutFeature";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Crown, Building, MapPin, Award, Sparkles, Hotel, Quote } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "Events", id: "events" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="The Heritage Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Welcome to Your dream Hotel "
          description="Experience luxury hospitality in our beautifully appointed vintage hotel, where classic charm meets modern comfort"
          tag="The Heritage Hotel"
          tagIcon={Crown}
          imageSrc="https://pixabay.com/get/g1d4b86769eab6f0d11710632199329e758969d0f6d1adf5840de54969b7735fa4d824df5ed2a8859c904ae9a52eb24d7b28d51e03bd3f8352b3588b4f9b3bf4d_1280.jpg"
          imageAlt="Elegant vintage hotel exterior"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Our hotel combines timeless elegance with modern luxury, offering guests an unforgettable experience in sophisticated surroundings that honor our rich heritage."
          features={[
            {
              icon: Building,
              title: "Historic Architecture",
              description: "Beautifully preserved vintage architecture with modern amenities seamlessly integrated throughout our elegant spaces."
            },
            {
              icon: Crown,
              title: "Luxury Service",
              description: "Personalized concierge service and attention to detail that ensures every moment of your stay exceeds expectations."
            },
            {
              icon: MapPin,
              title: "Prime Location",
              description: "Situated in the heart of the city with easy access to cultural attractions, shopping, and business districts."
            },
            {
              icon: Award,
              title: "Award Winning",
              description: "Recognized for excellence in hospitality with multiple industry awards for service quality and guest satisfaction."
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardSeven
          title="Hotel Amenities"
          description="Discover our exceptional facilities designed for your comfort and convenience"
          tag="Premium Facilities"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Elegant Accommodations",
              description: "Luxuriously appointed rooms and suites featuring vintage charm with modern amenities, premium linens, and stunning city views.",
              imageSrc: "https://pixabay.com/get/gcb7e5050582d3335e9edacbddf96b6ee017bc40d7cb8a5ac282037bd98b2975917b925c559163e881b163d90ed4566fa05c7ca611b862c6134cb566e8b16ad1d_1280.jpg",
              imageAlt: "Luxury hotel suite with vintage decor"
            },
            {
              id: 2,
              title: "Fine Dining Experience",
              description: "Award-winning restaurant serving contemporary cuisine with seasonal ingredients in an atmosphere of refined elegance.",
              imageSrc: "https://pixabay.com/get/g02d96a392d51599c30c11c7d31d1460014e0bed079714a9d6a7fa612b1fcfe726541d791f49fb384d3173ecabdda6429b87728f3decc44f0720663e2a8e13b66_1280.jpg",
              imageAlt: "Fine dining restaurant interior"
            },
            {
              id: 3,
              title: "Spa & Wellness Center",
              description: "Full-service spa offering rejuvenating treatments, fitness center, and wellness programs in tranquil surroundings.",
              imageSrc: "https://pixabay.com/get/gb2a554033e096e2a95c616c46d4b6c1c10e7bc4b07f5fa0bea7c6f88bb1212b901f9d475b0145cf476fac137f72d8c090bb3652ec5e47d8b6e00afa34fd6fabc_1280.jpg",
              imageAlt: "Luxury spa wellness center"
            },
            {
              id: 4,
              title: "Business & Events",
              description: "State-of-the-art meeting facilities and event spaces perfect for corporate gatherings, weddings, and special occasions.",
              imageSrc: "https://pixabay.com/get/g5220c220b7f24e900cd46f36351ebeacdcb941951aca09b7d6ca5172d7a1c7acc9789fafd78f78d778d6969599136fa252ddd1ba55f48111e552f1abe0b1afc5_1280.jpg",
              imageAlt: "Hotel business center meeting room"
            }
          ]}
          buttons={[
            {
              text: "View All Amenities",
              href: "amenities"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Guest Rooms"
          tagIcon={Hotel}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Heritage Collection",
              name: "Classic King Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://pixabay.com/get/gcb7e5050582d3335e9edacbddf96b6ee017bc40d7cb8a5ac282037bd98b2975917b925c559163e881b163d90ed4566fa05c7ca611b862c6134cb566e8b16ad1d_1280.jpg",
              imageAlt: "Classic king room with vintage decor"
            },
            {
              id: "2",
              brand: "Premium Collection",
              name: "Executive Suite",
              price: "$499/night",
              rating: 5,
              reviewCount: "856",
              imageSrc: "https://pixabay.com/get/gd2b62af8e0adfb7d280634fce7701a11ade2920bade27e088d62e0bb8d2a69918f9f4d85ad44221b19aa244ddc015f47aa2563a91b63acca58b2a470ef11daf1_1280.jpg",
              imageAlt: "Executive suite with sitting area"
            },
            {
              id: "3",
              brand: "Luxury Collection",
              name: "Presidential Suite",
              price: "$899/night",
              rating: 5,
              reviewCount: "423",
              imageSrc: "https://pixabay.com/get/g02d96a392d51599c30c11c7d31d1460014e0bed079714a9d6a7fa612b1fcfe726541d791f49fb384d3173ecabdda6429b87728f3decc44f0720663e2a8e13b66_1280.jpg",
              imageAlt: "Presidential suite with dining area"
            }
          ]}
          buttons={[
            {
              text: "View All Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear what our valued guests say about their stay"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Executive",
              testimonial: "The Heritage Hotel exceeded all expectations. The vintage charm combined with modern luxury created the perfect atmosphere for both business and relaxation.",
              imageSrc: "https://pixabay.com/get/g4da096275624b170695e9048405abafe1260eb5fce69a1edf8e708e783705e36aa422c3856130944b8b7e63c578e16befc2fc9763f1b23a448bb8c0c3c171908_1280.png",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Anderson",
              role: "Travel Enthusiast",
              testimonial: "An absolutely wonderful experience from check-in to departure. The attention to detail and personalized service made our anniversary celebration truly memorable.",
              imageSrc: "https://pixabay.com/get/g64c11e7f61c7d88a68eb6c2771a60a3d2056612d58bf0e95b5a85e68b4378479aaa08e598bc5909a8c455f595a17d4de81b1df5dc295f76b0bafb9b510ea08f3_1280.jpg",
              imageAlt: "Portrait of James Anderson"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Event Planner",
              testimonial: "The Heritage Hotel provided the perfect venue for our corporate retreat. The facilities were exceptional and the staff went above and beyond to ensure success.",
              imageSrc: "https://pixabay.com/get/ga1757fb03ba770e8afbed0d5201f2f8a6031a7fbb98f39618071785641c8923b42b24d764514cb157e5cbc86b7a3560f8fcef5b72d173874eee0be2e429da409_1280.jpg",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "Michael Chen",
              role: "Family Traveler",
              testimonial: "Our family vacation at The Heritage Hotel was extraordinary. The elegant surroundings and thoughtful amenities made it a perfect getaway for all ages.",
              imageSrc: "https://pixabay.com/get/g3cc73e93539c8b82d4912f31a22fa255c885ea912d96b648fe0e2e6c704e13a8cda201a7b891ac5af893578dc7dfbefcf63ab08339e3317702bdaf80e9f9ca09_1280.jpg",
              imageAlt: "Portrait of Michael Chen"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Stay"
          description="Contact our reservations team to book your luxury experience at The Heritage Hotel"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred Dates",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          imageSrc="https://pixabay.com/get/g661c55d6da864195042988825d1573ed6b7575782bcf962d721e8193a458602db0f618173b1484f3d1728fdafdde55cb6129adebcd202a53dda3b99ecdca830a_1280.jpg"
          imageAlt="Hotel concierge service"
          mediaPosition="right"
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="The Heritage Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "Events", href: "events" },
                { label: "Meetings", href: "meetings" },
                { label: "Weddings", href: "weddings" },
                { label: "Special Offers", href: "offers" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "reservations" },
                { label: "Concierge", href: "concierge" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}