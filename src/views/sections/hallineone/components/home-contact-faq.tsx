// @mui
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// components
import Iconify from '@components/atoms/iconify';

const faqs = [
  {
    id: 1,
    title: '음식점 선정 기준이 어떻게 되나요?',
    description: `스크린 골프 가맹점 점주님께 우선 선정권을 부여한 뒤, \n남은 카테고리는 가맹점 기준 1km 반경 이내의 음식점을 선정합니다.`,
  },
  {
    id: 2,
    title: '필요(구비)서류가 있나요?',
    description: `사업자등록증, 영업신고증, 수수료 정산을 위한 계좌사본이 필요합니다.`,
  },
  {
    id: 3,
    title: '손님이 주문한 음식을 카운터에서 확인 및 관리가 가능한가요?',
    description: `카운터에서 실시간으로 확인 및 관리가 가능합니다.`,
  },
  {
    id: 4,
    title: '타사 배달 플랫폼 중개료 및 광고료가 높다고 하던데요?',
    description: `랜덤으로 광고되는 타사와 다르게 광고비가 없으며\n독점으로 입점시켜 지역상권과 공생하는 시스템입니다.`,
  },
  {
    id: 5,
    title: '가맹비(계약금)는 어떻게 되나요?',
    description: `'수익창출형'과 '도입비ZERO형' 중 선택 가능합니다.`,
  },
];

// ----------------------------------------------------------------------

export default function FaqsList() {
  return (
    <div>
      {faqs.map((accordion) => (
        <Accordion key={accordion.id} defaultExpanded>
          <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
            <Typography variant="subtitle1">{accordion.title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{accordion.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
