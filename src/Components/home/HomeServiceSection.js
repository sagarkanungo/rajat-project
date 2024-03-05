import React from "react";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Regular Tax Filing",
    details:
      "We offer professional tax filing services for individuals and businesses. Our experts ensure accurate and timely filing to minimize your tax liabilities.",
      packages: [
        { duration: "3 months", price: 6000 },
        { duration: "6 months", price: 10000 },
        { duration: "1 year", price: 18000 }
      ]
  },
  {
    title: "Personalized Accountant/Outsource",
    details:
      "Outsource your accounting needs to us and get personalized services tailored to your business requirements. Our dedicated accountants ensure your financial records are accurate and up-to-date.",
  },
  {
    title: "Employee Management/Payroll Solution",
    details:
      "Our comprehensive payroll solution helps you manage your employees' salaries, taxes, and benefits efficiently. Say goodbye to payroll headaches and focus on growing your business.",
  },
  {
    title: "Income Tax Filing",
    details:
      "Let us handle your income tax filing process and ensure compliance with the latest regulations. We make tax filing hassle-free and maximize your refunds.",
  },
  {
    title: "Invoice Processing",
    details:
      "Streamline your invoicing process with our efficient invoice processing services. From generating invoices to tracking payments, we've got you covered.",
  },
];

function HomeServiceSection() {
  const router=useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ position: "relative" }}>
      <img
        src="serviceImage.jpg"
        alt="Service Image"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover", // Ensure the image covers the entire box
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          width: "80%",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: "6vw" }}>
          Our Services
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "3vw" }}>
          CheckOut Our Service may Help You
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
        }}
      >
        <Slider {...settings} sx={{ mt: 4 }}>
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{ width: "100%", textAlign: "center", padding: "0 8px" }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  display: "inline-block",
                  width: "100%",
                  height: "200px", // Fixed height for each card
                  overflow: "hidden",
                  transition: "transform 0.1s",
                  "&:hover": {
                    transform: "scale(1.05)", // Zoom in effect on hover
                  },
                }}
                onClick={() => {
                  router.push('services')
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.details}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default HomeServiceSection;
