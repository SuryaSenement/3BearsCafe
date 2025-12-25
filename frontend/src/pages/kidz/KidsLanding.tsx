import KidsHeader from '../../components/kids/KidsHeader';
import KidsHero from '../../components/kids/KidsHero';
import ActivitiesSection from '../../components/kids/ActivitiesSection';
import WorkshopsPreview from '../../components/kids/WorkshopsPreview';
import ThingsToDoSection from '../../components/kids/ThingsToDoSection';
import NurturingSection from '../../components/kids/NurturingSection';
import TestimonialsKids from '../../components/kids/TestimonialsKids';
import FAQSection from '../../components/kids/FAQSection';
import KidsFooter from '../../components/kids/KidsFooter';

const KidsLanding = () => {
  return (
    <div className="min-h-screen">
      <KidsHeader />
      <KidsHero />
      <ActivitiesSection />
      <WorkshopsPreview />
      <ThingsToDoSection />
      <NurturingSection />
      <TestimonialsKids />
      <FAQSection />
      <KidsFooter />
    </div>
  );
};

export default KidsLanding;