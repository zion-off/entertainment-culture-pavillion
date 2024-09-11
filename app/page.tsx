import dynamic from 'next/dynamic';

const EventDisplay = dynamic(() => import('@/components/EventDisplayComponent'), {
  ssr: false,
});

export default EventDisplay;