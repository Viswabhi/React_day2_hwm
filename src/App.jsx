function App() {
  return (
    <>
      <div className="w-1/2 h-[500px] my-[100px] mx-auto">
        <h1 className='text-[38px]'>Topics covered</h1>
        <p className='text-[18px] mt-3'>The following is a list of all the topics we cover in the MDN learning area.</p>


        <a className='text-[18px] inline-block mt-8 underline text-[#0069C2] visited:text-purple-600' href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web'>Getting started with the web</a>
       <p className='text-[18px] mt-1 ml-6'>Provides a practical introduction to web development for complete beginners.</p>

       <a className='text-[18px] inline-block mt-8 underline text-[#0069C2] visited:text-purple-600' href='https://developer.mozilla.org/en-US/docs/Learn/HTML'>HTML — Structuring the web
</a>
       <p className='text-[18px] mt-1 ml-6 pr-[70px]'>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.

</p>

       <a className='text-[18px] inline-block mt-8 underline text-[#0069C2] visited:text-purple-600' href='https://developer.mozilla.org/en-US/docs/Learn/CSS'>CSS — Styling the web</a>
       <p className='text-[18px] mt-1 ml-6 pr-16'>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>

       
      </div>
    </>
  )
}

export default App