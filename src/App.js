import './App.css';
import home_insurance from './components/images/h-ins.png'
import life_insurance from './components/images/l-ins.png'
import vehicle_insurance from './components/images/v-ins.png'
import funeral_insurance from './components/images/v-ins.png'
import fqa_image from './components/images/fqa.png'
import Button from './components/generic/Button';
import NavigationSection from './components/sections/NavigationSection';
import ExpendableMessage from './components/generic/ExpandableMessage';
import FooterSection from './components/sections/FooterSection';

function App() {
  return (
    <div className="App">
      <NavigationSection />
      <section className='banner-section'>
        <div className='banner-text-wrapper'>
          <h4>Get Insurance <br />Quotes in Minutes.</h4>
          <h6>Select a product to compare quotes.</h6>
          <div className='products'>
            <div className="sub-menu-items">
              <Button icon={vehicle_insurance} name={"Vehicle Insurance"} />
              <Button icon={home_insurance} name={"Home Insurance"} />
              <Button icon={life_insurance} name={"Life Insurance"} />
              <Button icon={funeral_insurance} name={"Funeral Insurance"} />
            </div>
          </div>
        </div>
        <div className='banner-marketing-wrapper'>
          <div className='banner-image-wrapper'>
            <img src={"https://s3-alpha-sig.figma.com/img/ac00/0134/2f5a4ae8e7a14e15b69510a9a2580860?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwVLpikegivP41CNEkmbjzNYlZ2KEQvP~7ZOIjYx9kbzVQgSRVSUKJC7Cx6hOmv2P06rcG1uTzsTjrVrhHTcVhV8zmUlut1DUpF7Av08~nVdZ2dnEauy7hJEON5RVh-LMMJkGuWvCL2MtyOttkodirGACo3A-zDF7w0hjFmuBK7W~F891eUTgl-87ntjw6LVI6gnNRZqIw5kL4TKMZP818dFlYK1A84gbGOBo5BGFEgk~w2PDfIl6Jz4jdg8e51yfhQYl880JRth~aBLe70N-8vWPNqM~-k-7IT5UPm~0HIyY5nYeA02ocn4BwhhnZsCha-ZQlpjw4i-nhzaeLDbLA__"} alt="banner" />
          </div>
        </div>
      </section>
      <section className='light-content-section'>
        <article>
          <h1>Why trust LionComp?</h1>
          <p>Find the insurance coverage you require and save money by comparing quotes from top-rated insurers all in one place.</p>
        </article>
        <div className='smart-layout-3x3'>
          <div className='smart-item'>
            <div className='icon-wrapper'>
              <img src={life_insurance} alt="icon" />
            </div>
            <div className='message-wrapper'>
              <h4>Smart tools</h4>
              <p>Our proprietary technology makes it easy to compare personalized quotes and policies from top-rated insurers side by side.</p>
            </div>
          </div>

          <div className='smart-item'>
            <div className='icon-wrapper'>
              <img src={life_insurance} alt="icon" />
            </div>
            <div className='message-wrapper'>
              <h4>Fully independent</h4>
              <p>From exploring coverage options to making policy adjustments as your life changes, we're your advocate at every step.</p>
            </div>
          </div>

          <div className='smart-item'>
            <div className='icon-wrapper'>
              <img src={life_insurance} alt="icon" />
            </div>
            <div className='message-wrapper'>
              <h4>Security you can trust</h4>
              <p>Your security is our priority. We use industry-leading security practices to help keep your information safe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='darker-content-section'>
        <article className='frequently-asked-questions' style={{ textAlign: "center" }}>
          <div className='icon-wrapper'>
            <img src={fqa_image} alt="icon" />
          </div>
          <h1>Frequently asked questions</h1>
        </article>
        <div className='smart-layout'>
          <ExpendableMessage title={"How does LionComp find the best insurance quotes for me?"} message={"LionComp utilizes advanced algorithms to search through a wide network of reputable insurance providers and brokers. We analyze your requirements and preferences to match you with the most suitable options tailored to your needs."} />
          <ExpendableMessage title={"Is my personal information secure with LionComp?"} message={"Yes, protecting your personal information is our top priority. LionComp employs industry-standard security measures to safeguard your data. We utilize encryption protocols and follow strict privacy policies to ensure the confidentiality and integrity of your information."} />
          <ExpendableMessage title={"What types of insurance products does LionComp offer?"} message={"LionComp offers a comprehensive range of insurance products, including auto, home, life, health, and business insurance, among others. Whatever your coverage needs may be, LionComp is here to assist you in finding the right policy."} />
          <ExpendableMessage title={"How long does it take to receive insurance quotes through LionComp?"} message={"The process of receiving insurance quotes through LionComp is quick and efficient. In most cases, you'll receive personalized quotes within minutes of submitting your information. Our streamlined platform ensures a swift and hassle-free experience."} />
          <ExpendableMessage title={"Can I speak to a real person if I have questions about my insurance options?"} message={"Absolutely! Our dedicated customer support team is available to assist you with any questions or concerns you may have about your insurance options. Whether you prefer to communicate via phone, email, or live chat, we're here to provide expert guidance and support every step of the way."} />
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

export default App;
