import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Regular Tax Filing",
    details:
      "We offer professional tax filing services for individuals and businesses. Our experts ensure accurate and timely filing to minimize your tax liabilities.",
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
  const router = useRouter();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          objectFit: "cover",
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
        <Typography variant="h5" sx={{ fontSize: { xs: "6vw", sm: "4vw" } }}>
          Our Services
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "3vw", sm: "2vw" } }}>
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
              sx={{
                width: "100%",
                textAlign: "center",
                padding: { xs: "0 8px", sm: "0 16px" },
              }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  display: "inline-block",
                  width: "100%",
                  height: "auto",
                  borderRadius: 6,
                  overflow: "hidden",
                  transition: "transform 0.2s",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  borderColor: "#007bff",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
                    borderColor: "#007bff",
                  },
                }}
                onClick={() => {
                  router.push("/services");
                }}
              >
                <CardContent
                 sx={{
                  height: "200px", // Set height to 100% to ensure consistent height
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",

                }}
                >
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
