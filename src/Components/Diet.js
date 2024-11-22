import React from "react";
import Footer from "./Footer";
import breakfast from "../../src/assets/breakfast.jpeg"
import snacks from "../../src/assets/Snacks.jpeg"
import Lunch from "../../src/assets/lunch.jpeg"
import dinner from "../../src/assets/Dinner.jpeg"
import Navbar from "./Navbar";

const Diet = () => {
  return (
    <>
     <Navbar />
      <div className="bg-[#000814] text-gray-300 p-8">
        <div className="container mx-auto space-y-16">
          {/* Page Header */}
          <h1 className="text-4xl font-bold text-center text-[#18BCFC]">General Diet Plan</h1>
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
            A balanced diet is essential for maintaining good health and energy throughout the day. 
            Here's a simple and effective diet plan suitable for everyone.
          </p>

          {/* Diet Sections */}
          <div className="space-y-16">
            {/* Breakfast Section */}
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="md:w-1/2">
                <img
                  src={breakfast}
                  alt="Breakfast"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-[#FA6A28]">🍳 Breakfast</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Start your day with a glass of warm water and lemon or herbal tea.</li>
                  <li>Include high-fiber options like oatmeal, whole-grain bread, or multigrain parathas.</li>
                  <li>Pair it with a source of protein like boiled eggs, Greek yogurt, or a handful of nuts.</li>
                  <li>Add fresh fruits like bananas, apples, or berries.</li>
                </ul>
              </div>
            </div>

            {/* Lunch Section */}
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-[#FA6A28]">🥗 Lunch</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Begin with a fresh vegetable salad or soup.</li>
                  <li>Include a balanced portion of whole grains like brown rice, quinoa, or chapati.</li>
                  <li>Add lean proteins like lentils, tofu, chicken, or fish.</li>
                  <li>Incorporate cooked vegetables or a vegetable curry for essential nutrients.</li>
                </ul>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <img
                  src={Lunch}
                  alt="Lunch"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Snacks Section */}
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="md:w-1/2">
                <img
                  src={snacks}
                  alt="Snacks"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-[#FA6A28]">🍎 Snacks</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Opt for healthy snacks like roasted nuts, seeds, or a fruit smoothie.</li>
                  <li>Choose fresh fruits or vegetable sticks with hummus for a quick energy boost.</li>
                  <li>A cup of green tea or herbal tea can also be refreshing.</li>
                </ul>
              </div>
            </div>

            {/* Dinner Section */}
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-[#FA6A28]">🍲 Dinner</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Keep dinner light and avoid heavy meals late at night.</li>
                  <li>Choose a small portion of whole grains or a vegetable soup.</li>
                  <li>Include proteins like grilled chicken, paneer, or legumes.</li>
                  <li>Add a serving of steamed vegetables or a light salad.</li>
                </ul>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <img
                  src={dinner}
                  alt="Dinner"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default Diet;
