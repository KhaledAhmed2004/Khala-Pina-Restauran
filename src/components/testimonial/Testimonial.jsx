import { useQuery } from "@tanstack/react-query";
import TestimonialCard from "../card/testimonialCard/TestimonialCard";
import Marquee from "react-fast-marquee";
import useAxios from "../../hooks/useAxios";

const Testimonial = () => {
  const axios = useAxios();
  const getTestimonial = async () => {
    const res = await axios.get("/testimonial");
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["testimonial"],
    queryFn: getTestimonial,
  });
  if (isLoading) {
    return <p>yes man</p>;
  }
  return (
    <>
      <h1 className="text-6xl font-semibold text-center mb-8">Testimonial</h1>
      <Marquee pauseOnClick={true} speed={30} style={{ marginLeft: "20px" }}>
        <div className="flex gap-5">
          {data?.map((testimonial) => (
            <TestimonialCard
              key={testimonial._id}
              testimonial={testimonial}
            ></TestimonialCard>
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default Testimonial;
