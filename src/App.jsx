import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, Phone, Mail, ChevronRight, 
  Stethoscope, Pill, GraduationCap, Users, 
  Activity, Globe, CheckCircle, ArrowRight,
  Briefcase, Building2, HeartPulse, Microscope
} from 'lucide-react';

// --- Assets & Data ---

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'solutions', label: 'Our Solutions' },
  { id: 'products', label: 'Products' },
  { id: 'courses', label: 'Courses' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact Us' },
];

const SOLUTIONS_DATA = [
  {
    title: 'Pharmaceuticals',
    icon: <Pill className="w-8 h-8 text-blue-600" />,
    desc: 'End-to-end procurement, marketing, distribution, and supply chain management of essential medicines and medical consumables - our primary area of expertise.',
    detail: 'Without a consistent supply chain and strict quality control, healthcare systems falter. We operate a lean, compliant, and technology-enabled pharmaceutical division dedicated to delivering the right medicines to the right place on time and intact.',
    features: [
      'Forecasting & Demand Planning',
      'Procurement & Regulatory Compliance',
      'Warehousing & Distribution',
      'Sales, Marketing & Field Support',
      'End-to-End Supply Chain Visibility'
    ]
  },
  {
    title: 'Hospital Management',
    icon: <Building2 className="w-8 h-8 text-teal-600" />,
    desc: 'Implementation of efficient management systems, operational optimization, and quality improvement programs for hospitals, clinics, and healthcare centers.',
    detail: 'Hospitals thrive when systems work. We help hospitals and clinics achieve operational excellence through structured systems, technology integration, and quality improvement strategies.',
    features: [
      'Operational System Design',
      'Hospital Process Optimization',
      'Quality Improvement Programs',
      'Health Facility Audits',
      'Digital Transformation'
    ]
  },
  {
    title: 'Laboratory & Diagnostics',
    icon: <Microscope className="w-8 h-8 text-indigo-600" />,
    desc: 'Supply, installation, and maintenance of diagnostic equipment, alongside technical support to strengthen laboratory services and diagnostic accuracy.',
    detail: 'Accurate diagnosis is the foundation of effective healthcare. We support hospitals and public health programs with reliable diagnostic systems designed for precision, efficiency, and sustainability.',
    features: [
      'Supply and installation of equipment',
      'Calibration, maintenance, and repair',
      'Reliable reagent sourcing',
      'Capacity building for lab staff',
      'Diagnostic network optimization'
    ]
  },
  {
    title: 'NGO Consulting',
    icon: <Users className="w-8 h-8 text-orange-600" />,
    desc: 'Comprehensive consulting for health and development organizations, including project design, procurement and supply management (PSM), grant management, and donor coordination.',
    detail: 'We design and deliver donor-grade health and development projects while strengthening procurement and supply management (PSM) systems for NGOs, foundations, and government programs.',
    features: [
      'Project design and proposal development',
      'PSM systems setup',
      'Monitoring, evaluation & learning (MEL)',
      'Donor engagement and reporting',
      'Capacity building'
    ]
  },
  {
    title: 'Courses & E-Learning',
    icon: <GraduationCap className="w-8 h-8 text-green-600" />,
    desc: 'Delivery of internationally recognized certification programs and online courses for caregivers, personal support workers, health managers, and clinical professionals.',
    detail: 'We believe that strong systems require skilled people. Our training programs empower healthcare professionals with knowledge and tools to excel anywhere in the world.',
    features: [
      'Accredited Global Health Courses',
      'Institutional Capacity Building',
      'Customized Training Solutions',
      'Continuous Professional Development (CPD)',
      'Mentorship & Coaching'
    ]
  }
];

const TEAM_DATA = [
  { name: 'Dr. Olusegun Adeniyi', role: 'Epidemiologist | Public Health Expert | Health Systems Strengthening Consultant' },
  { name: 'Mrs. Henrietta A.O.', role: 'Director, Health Systems & Logistics Operations' },
  { name: 'Mr. Ayodele Alegbeleye', role: 'Development Expert, Public Health Practitioner, Advisory Board Member' },
  { name: 'Priscilla Uchechukwu', role: 'ACCA, ICAN | Advisory Board Member' },
  { name: 'Olubanjo Adekani', role: 'Website Design & Development, Digital Marketing Specialist' }
];

const COURSES_LIST = [
  "POSTGRADUATE DIPLOMA IN HEALTHCARE MANAGEMENT AND LEADERSHIP",
  "CERTIFICATE IN GLOBAL HEALTH SYSTEMS AND POLICY",
  "HEALTHCARE QUALITY AND PATIENT SAFETY MANAGEMENT",
  "DIGITAL HEALTH AND HEALTH INFORMATICS",
  "HEALTH PROJECT MANAGEMENT AND M&E",
  "HOME SUPPORT WORKER (HSW) TRAINING PROGRAM",
  "PERSONAL SUPPORT WORKER (PSW) CERTIFICATION",
  "HEALTHCARE ENTREPRENEURSHIP AND INNOVATION"
];

const JOBS_LIST = [
  "Associate Director, State Program Operations",
  "Program Manager, Pharmacy Based Immunization Delivery",
  "Pharmaceutical Canvasser",
  "Pharmacist",
  "Pharmacy Technician",
  "Head Corporate Marketing & Communications (Nigeria)",
  "Data Analyst",
  "Medical Sales Representative",
  "Deputy Head of Sales and Marketing"
];

// --- Components ---

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold transition-colors duration-300 flex items-center gap-2";
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 shadow-md",
    secondary: "bg-white text-blue-700 border border-blue-700 hover:bg-blue-50 shadow-sm",
    outline: "border-2 border-white text-white hover:bg-white/10"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Section = ({ title, children, className = "bg-white", id }) => (
  <section id={id} className={`py-16 px-4 md:px-8 lg:px-16 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {title && <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">{title}</h2>}
      {children}
    </div>
  </section>
);

const Card = ({ title, children, className = "" }) => (
  <div className={`bg-white p-6 rounded-lg shadow-lg border border-slate-100 hover:shadow-xl transition-shadow ${className}`}>
    {title && <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>}
    <div className="text-slate-600">{children}</div>
  </div>
);

// --- Pages ---

const HomePage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    {/* Hero */}
    <div className="relative bg-slate-900 text-white min-h-[600px] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-217358c7db81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Healthcare Warehouse" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Building reliable supply chains,<br/>
          delivering quality medicines, and<br/>
          training the next generation of global caregivers.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button onClick={() => navigate('solutions')}>Check Our Solutions <ArrowRight size={20}/></Button>
          <Button variant="outline" onClick={() => navigate('courses')}>Explore Our Courses</Button>
        </div>
      </div>
    </div>

    {/* Introduction */}
    <Section className="bg-slate-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Introduction to AFRIGLOBAL HEALTH LIMITED</h2>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            AFRIGLOBAL HEALTH LIMITED is a leading West African healthcare partner dedicated to strengthening health systems through pharmaceutical supply, hospital and diagnostics support, consultancy services, and accredited global health training.
          </p>
          <p className="text-slate-600 mb-4">
            Since 2008, we have supported healthcare systems, hospitals, pharmacies, and development partners with quality assured medicines, medical equipment, and practical capacity building initiatives that improve clinical outcomes and save lives.
          </p>
          <p className="text-slate-600 font-medium">
            Our integrated approach bridges public health, private sector efficiency, and professional training—ensuring sustainable access to essential health commodities and empowering healthcare workers to deliver better care across communities.
          </p>
          <div className="mt-6">
            <Button variant="secondary" onClick={() => navigate('about')}>About Us</Button>
          </div>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Medical Team" className="w-full h-full object-cover"/>
        </div>
      </div>
    </Section>

    {/* Solutions Preview */}
    <Section title="Our Solutions" className="bg-white">
      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
        At AFRIGLOBAL HEALTH LIMITED, we operate across five integrated solution areas that ensure clients receive end-to-end healthcare support—from product to practice.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {SOLUTIONS_DATA.slice(0,3).map((sol, idx) => (
          <Card key={idx} className="border-t-4 border-blue-600">
            <div className="mb-4">{sol.icon}</div>
            <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
            <p className="text-sm text-slate-600 mb-4">{sol.desc}</p>
            <button onClick={() => navigate('solutions')} className="text-blue-600 font-semibold hover:underline flex items-center">Learn More <ChevronRight size={16}/></button>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button onClick={() => navigate('solutions')} className="mx-auto">View All Solutions</Button>
      </div>
    </Section>

    {/* Geographical Coverage */}
    <Section className="bg-blue-900 text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Geographical Coverage & Impact</h2>
          <p className="mb-4 text-blue-100">
            Since 2008, AFRIGLOBAL HEALTH LIMITED has established a strong operational footprint across Nigeria and West Africa, working with public and private partners to expand access to quality healthcare solutions.
          </p>
          <p className="mb-6 text-blue-100">
            Our nationwide logistics network supports the timely distribution of medicines, laboratory equipment, and medical consumables to hospitals, pharmacies, and development projects in both urban and hard-to-reach communities.
          </p>
          <div className="space-y-4">
            {[
              "Partnered with government agencies, NGOs, and donor-funded programs",
              "Supported hundreds of healthcare facilities",
              "Trained and empowered health professionals globally",
              "Contributed to health systems resilience and workforce development"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
           <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">Impact at a Glance</h3>
           <div className="grid grid-cols-2 gap-6">
             <div className="text-center">
               <div className="text-4xl font-bold text-teal-400">15+</div>
               <div className="text-sm mt-1">Years of Service</div>
             </div>
             <div className="text-center">
               <div className="text-4xl font-bold text-teal-400">100+</div>
               <div className="text-sm mt-1">Facilities Supported</div>
             </div>
             <div className="text-center">
               <div className="text-4xl font-bold text-teal-400">5+</div>
               <div className="text-sm mt-1">Solution Areas</div>
             </div>
             <div className="text-center">
               <div className="text-4xl font-bold text-teal-400">Nationwide</div>
               <div className="text-sm mt-1">Logistics Network</div>
             </div>
           </div>
        </div>
      </div>
    </Section>

    {/* Why Choose Us */}
    <Section title="Why Choose Us?">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-slate-600">
          Choosing AFRIGLOBAL HEALTH LIMITED means partnering with a team that understands Africa's healthcare realities and delivers world-class solutions tailored to local needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Proven Track Record", text: "Operating since 2008 with a history of reliable delivery, compliance, and positive health outcomes across Nigeria and West Africa." },
          { title: "Integrated Solutions", text: "Seamlessly linking pharmaceutical supply, logistics, consulting and training for efficiency and sustainability." },
          { title: "Regulatory Compliance", text: "Adherence to national and international standards, ensuring safety, accountability, and product quality." },
          { title: "Experienced Team", text: "Multidisciplinary professionals in pharmacy, public health, data science, logistics, and systems management." },
          { title: "Innovation-Driven", text: "Leveraging technology and data to improve decision making, transparency, and operational performance." },
          { title: "Sustainable Partnerships", text: "Building long-term collaborations that empower communities, strengthen systems, and promote health equity." }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-50 p-6 rounded-lg hover:bg-blue-50 transition-colors">
            <h4 className="font-bold text-lg mb-2 text-blue-800">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* President's Desk */}
    <Section className="bg-gradient-to-br from-slate-100 to-white">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-blue-900 p-8 text-white flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">From the President/GMP's Desk</h3>
          <div className="h-1 w-20 bg-teal-400 mb-6"></div>
          <p className="italic text-blue-200">"Excellence is not just a value—it is our culture and the foundation of everything we do."</p>
        </div>
        <div className="md:w-2/3 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Excellence is Our Culture</h3>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            At AFRIGLOBAL HEALTH LIMITED, our approach to transformation in pharmaceuticals, diagnostics, professional training, and health systems consulting is both innovative and adaptive, guided by our proprietary T3 Transformation Framework. This model ensures that every intervention we design is practical, scalable, and results-oriented.
          </p>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            We promote inclusive growth and maintain transparent performance indicators that allow all stakeholders to measure progress in a fair, accountable, and evidence-based manner.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            Above all, we recognize that our greatest success lies in improving the health and well-being of the communities we serve—because at AFRIGLOBAL HEALTH, transformation begins with people.
          </p>
        </div>
      </div>
    </Section>
  </div>
);

const AboutPage = () => (
  <div className="animate-in fade-in duration-500">
    <div className="bg-slate-900 text-white py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
      <p className="max-w-2xl mx-auto text-blue-200">
        AFRIGLOBAL HEALTH LIMITED is a leading West African healthcare company specializing in pharmaceutical procurement, diagnostics, hospital systems, NGO consulting, and professional training.
      </p>
    </div>

    <Section>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Our Vision</h3>
            <p className="text-slate-700">To be the Preferred Partner in Healthcare, recognized for excellence, innovation, and impact. <br/><span className="italic font-semibold block mt-2">"Bridging Systems, Solutions, and Skills for a Healthier Africa."</span></p>
          </div>
          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-xl font-bold text-teal-900 mb-2">Our Mission</h3>
            <p className="text-slate-700">To expand access to quality healthcare products and solutions while consistently delivering excellence and measurable value to partners, communities, and stakeholders.</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Core Values</h3>
          <div className="grid grid-cols-1 gap-4">
             {[
               { title: "Innovation", text: "Practical, scalable solutions that drive progress" },
               { title: "Integrity", text: "Ethical, transparent, and compliant business practices" },
               { title: "Value Creation", text: "Delivering measurable impact for all stakeholders" }
             ].map((v, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="bg-blue-100 p-2 rounded-full text-blue-600 font-bold">{i+1}</div>
                 <div>
                   <h4 className="font-bold text-slate-900">{v.title}</h4>
                   <p className="text-sm text-slate-600">{v.text}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </Section>

    <Section title="Our Objectives" className="bg-slate-50">
      <p className="text-center max-w-3xl mx-auto mb-8 text-slate-600">
        Our strategic goals are aligned with both national and global health priorities, particularly those aimed at achieving Universal Health Coverage (UHC) and the Sustainable Development Goals (SDGs).
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          "Expanding equitable access to essential medicines, diagnostics, and medical equipment in underserved areas.",
          "Promoting the use of quality assured generic and antiretroviral medicines.",
          "Advocating for the rational use of medicines to enhance patient safety.",
          "Strengthening healthcare delivery systems by supporting high-quality diagnostic tools.",
          "Enhancing workforce capacity through professional training and mentorship."
        ].map((obj, i) => (
          <div key={i} className="flex gap-3">
             <ArrowRight className="text-teal-500 mt-1 flex-shrink-0" size={18} />
             <p className="text-slate-700 text-sm">{obj}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Our Team">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_DATA.map((member, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow border border-slate-100 text-center">
            <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="text-slate-400" />
            </div>
            <h4 className="font-bold text-lg text-slate-800">{member.name}</h4>
            <p className="text-sm text-slate-500 mt-2">{member.role}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Core Competencies" className="bg-blue-900 text-white">
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        {[
          { head: "Supply Chain Services", body: "Comprehensive forecasting, procurement, customs clearance, warehousing, distribution." },
          { head: "Training & Capacity Building", body: "Design and delivery of professional training programs and workforce development planning." },
          { head: "Sales & Marketing", body: "Market research, customer engagement, brand positioning and promotion of essential medicines." },
          { head: "System Design", body: "Deployment of procurement, logistics, and health information management systems." },
          { head: "Quality Assurance", body: "Implementation of robust quality control mechanisms and regulatory adherence." },
          { head: "Data Analytics", body: "Utilization of data-driven insights to improve program performance and accountability." }
        ].map((item, i) => (
          <div key={i}>
            <h4 className="font-bold text-teal-400 text-lg mb-2">{item.head}</h4>
            <p className="text-blue-100 text-sm">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

const SolutionsPage = () => (
  <div className="animate-in fade-in duration-500">
    <div className="bg-blue-700 text-white py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
      <p className="max-w-2xl mx-auto">End-to-end healthcare support—from product to practice.</p>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
      {SOLUTIONS_DATA.map((sol, index) => (
        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-full">{sol.icon}</div>
              <h2 className="text-3xl font-bold text-slate-800">{sol.title}</h2>
            </div>
            <p className="text-lg text-slate-600 mb-6 font-medium">{sol.desc}</p>
            <p className="text-slate-600 mb-8">{sol.detail}</p>
            
            <h4 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-wider">Key Activities & Offerings</h4>
            <ul className="space-y-3">
              {sol.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  {feat}
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-slate-50 p-4 rounded-lg border-l-4 border-blue-600">
              <span className="font-bold text-blue-900">Business Impact: </span>
              <span className="text-slate-600 text-sm">Predictable supply, reduced stock losses, improved efficiency, and enhanced clinical decision-making for better patient outcomes.</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-slate-200 h-80 rounded-xl w-full flex items-center justify-center overflow-hidden">
               {/* Placeholders for specific solution images */}
               <div className="text-slate-400 font-bold text-xl">{sol.title} Image</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProductsPage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    <Section title="Products and Equipment" className="bg-slate-50">
      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
        Reliable Medical Products That Power Better Care. We supply hospitals, pharmacies, and health programs with trusted medicines, consumables, and medical technologies sourced from globally certified manufacturers.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Pharma */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 bg-blue-100 flex items-center justify-center">
            <Pill size={64} className="text-blue-500"/>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Pharmaceuticals</h3>
            <p className="text-slate-600 mb-6">
              We distribute a wide range of ethical and generic medicines, vaccines, and therapeutic products that meet WHO prequalification and NAFDAC standards. Our integrated supply network serves hospitals, pharmacies, and NGOs across Africa.
            </p>
            <p className="font-medium text-blue-800 mb-6">Your patients deserve dependable care. We make sure nothing interrupts it.</p>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 w-full justify-center">View Full Catalog</Button>
          </div>
        </div>

        {/* Equipment */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 bg-teal-100 flex items-center justify-center">
            <Activity size={64} className="text-teal-500"/>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Medical Equipment & Devices</h3>
            <p className="text-slate-600 mb-6">
              Quality healthcare depends on dependable tools. From patient monitors and laboratory analyzers to sterilization systems and imaging solutions, we equip healthcare facilities to operate efficiently.
            </p>
            <p className="font-medium text-teal-800 mb-6">Reliable tools. Sustainable support. Better outcomes.</p>
            <Button variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-50 w-full justify-center">View Full Catalog</Button>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const CoursesPage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    {/* Hero */}
    <div className="bg-slate-900 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Build a Healthcare Career That Opens Global Doors</h1>
      <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
        Your skills deserve global recognition—not limits. Instead of spending 5-10 times more to study abroad, earn CPD UK-accredited certifications locally.
      </p>
      <Button onClick={() => navigate('contact')} className="mx-auto bg-green-600 hover:bg-green-700">Make Enquiries</Button>
    </div>

    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Choose AFRIGLOBAL HEALTH Training</h2>
          <div className="space-y-6">
            {[
              { title: "Globally Recognized Certifications", desc: "Accredited by CPD UK" },
              { title: "Flexible Learning", desc: "Online, Hybrid, or Weekend Classes" },
              { title: "Expert Faculty", desc: "Trainers with International Experience" },
              { title: "Career-Ready Pathways", desc: "From Africa to Global Practice" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-100 p-8 rounded-xl">
           <h3 className="text-2xl font-bold mb-4">Learn Anywhere. Grow Without Limits.</h3>
           <p className="text-slate-600 mb-4">Through our partnership with the Global Health E-Learning Centre, we connect you to world-class online courses designed to expand your expertise anytime, anywhere.</p>
           <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
             <li>Flexible learning that fits your schedule</li>
             <li>Globally recognized certification</li>
             <li>Expert instruction grounded in real-world practice</li>
           </ul>
           <Button className="w-full justify-center">Explore E-Learning Courses</Button>
        </div>
      </div>
    </Section>

    <Section title="Courses Offered" className="bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {COURSES_LIST.map((course, idx) => (
            <div key={idx} className={`p-4 ${idx !== COURSES_LIST.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 flex items-center gap-3`}>
              <GraduationCap className="text-blue-500 flex-shrink-0" size={20} />
              <span className="font-medium text-slate-800">{course}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 font-bold text-xl text-blue-900">Train locally. Earn globally. Lead confidently.</p>
      </div>
    </Section>
  </div>
);

const CareersPage = () => (
  <div className="animate-in fade-in duration-500">
    <Section className="bg-blue-50">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">Careers at Afriglobal</h1>
        <p className="text-lg text-slate-700">
          Join a mission-driven healthcare team where impact, compliance, and professional growth define everything we do. At AFRIGLOBAL HEALTH, every role contributes to advancing equitable access to medicines and healthcare solutions.
        </p>
      </div>
    </Section>

    <Section>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">What We're Looking For</h3>
          <p className="text-slate-600 mb-6">
            We seek passionate, purpose-driven individuals committed to creating lasting impact. Our ideal candidates thrive in collaborative environments, demonstrate strong communication skills, and are eager to learn and innovate.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Inclusion and Diversity</h3>
          <p className="text-slate-600 mb-4">
            We are dedicated to fostering an inclusive culture where every employee feels welcomed, respected, and valued.
          </p>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li><strong>Diversity Training:</strong> Comprehensive training to enhance awareness of unconscious bias.</li>
            <li><strong>Employee Resource Groups:</strong> Platforms to connect and share experiences.</li>
            <li><strong>Recruiting Practices:</strong> Eliminating bias from hiring processes.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Application Guidelines</h3>
          <p className="text-sm text-slate-600 mb-4">
            Interested candidates should send their CV and a Suitability Statement (max 200 words) to <span className="font-bold">info@afriglobalhealth.com</span> in Microsoft Word format.
          </p>
          <div className="bg-slate-100 p-4 rounded mb-4">
             <p className="text-xs font-bold text-slate-500 uppercase">Email Subject Line Format:</p>
             <p className="font-mono text-sm">Job Title-Location-Full Name</p>
             <p className="text-xs text-slate-400 mt-1">(e.g., "Program Officer-Borno-Emmanuel Adeoye")</p>
          </div>
          <p className="text-xs text-red-500 mb-4">
            * We do not charge any fees for job applications or interviews.
          </p>
          <Button className="w-full justify-center">Fill Application Form</Button>
        </div>
      </div>
    </Section>

    <Section title="Open Positions" className="bg-slate-50">
      <div className="grid md:grid-cols-2 gap-4">
        {JOBS_LIST.map((job, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow flex justify-between items-center">
            <span className="font-medium text-slate-800">{job}</span>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Apply Now</span>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation of form submission
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <Section title="Contact Us" className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <Card title="General Information">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-1" />
                  <p>9B Milverton Road, Ikoyi, Lagos State, Nigeria</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" />
                  <p>+234-906-146-5195</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" />
                  <p>info@afriglobalhealth.com</p>
                </div>
              </div>
            </Card>
            
            <Card title="Office Hours">
               <p className="flex items-center gap-2"><Activity size={16} className="text-green-500"/> Mon - Fri: 9am - 5pm</p>
               <p className="flex items-center gap-2 text-slate-400 mt-2"><Activity size={16}/> Weekends: Closed</p>
            </Card>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            {submitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded text-center">
                Thank you! We will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows="4" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help you?"></textarea>
                </div>
                <Button className="w-full justify-center">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

const Header = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
          {/* Logo Placeholder - using text as no image file provided directly for logo */}
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-blue-900 tracking-tight">AFRIGLOBAL</span>
            <span className="text-sm font-semibold text-teal-600 tracking-widest uppercase">Health Limited</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === link.id 
                  ? 'text-blue-700 bg-blue-50' 
                  : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-600 hover:text-blue-900 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Nav Dropdown */}
    {isMenuOpen && (
      <div className="md:hidden bg-white border-t border-slate-100">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                currentPage === link.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-blue-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </header>
);

const Footer = ({ navigate }) => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
      {/* Brand */}
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-white text-xl font-bold mb-4">AFRIGLOBAL HEALTH</h3>
        <p className="text-sm text-slate-400 mb-6">
          Building healthier communities through innovation, partnerships, and human capital development.
        </p>
        <div className="flex space-x-4">
           {/* Social Placeholders */}
           <div className="w-8 h-8 bg-slate-700 rounded hover:bg-blue-600 cursor-pointer flex items-center justify-center text-white font-bold">in</div>
           <div className="w-8 h-8 bg-slate-700 rounded hover:bg-blue-400 cursor-pointer flex items-center justify-center text-white font-bold">X</div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
        <ul className="space-y-2">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <button onClick={() => navigate(link.id)} className="hover:text-white transition-colors text-sm">
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Details */}
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact Details</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <MapPin size={16} className="mt-1 flex-shrink-0" />
            <span>9B, Milverton Road, Ikoyi, Lagos State, Nigeria</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail size={16} flex-shrink-0 />
            <span>info@afriglobalhealth.com</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone size={16} flex-shrink-0 />
            <span>+234-906-146-5195</span>
          </li>
        </ul>
      </div>

      {/* Other */}
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Webmail</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Webmail 1</a></li>
          <li><a href="#" className="hover:text-white">Webmail 2</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
      <p>&copy; 2025 Afriglobal Health Limited | RC No. 7168167 | All Rights Reserved.</p>
      <p className="mt-2">Website by Adekani</p>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage navigate={setCurrentPage} />;
      case 'about': return <AboutPage navigate={setCurrentPage} />;
      case 'solutions': return <SolutionsPage navigate={setCurrentPage} />;
      case 'products': return <ProductsPage navigate={setCurrentPage} />;
      case 'courses': return <CoursesPage navigate={setCurrentPage} />;
      case 'careers': return <CareersPage navigate={setCurrentPage} />;
      case 'contact': return <ContactPage navigate={setCurrentPage} />;
      default: return <HomePage navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={setCurrentPage} />
    </div>
  );
}

