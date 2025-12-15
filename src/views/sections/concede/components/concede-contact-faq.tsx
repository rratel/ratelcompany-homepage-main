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
    title: '무인매장 도입 비용은 어떻게 되니요?',
    description: `'약정형'과 '일시납' 중 선택 가능합니다.`,
  },
  {
    id: 2,
    title: '필요(구비)서류가 있나요?',
    description: `사업자등록증, 영업신고증, 수수료 정산을 위한 계좌사본이 필요합니다.`,
  },
  {
    id: 3,
    title: '낮 시간에도 무인매장을 사용할 수 있나요?',
    description: `컨시드 서비스는 사장님들을 위한 관리자 웹서비스를 제공하며\n무인매장 운영시간, 무인매장 활성여부 등을 자유롭게 설정하실 수 있습니다.`,
  },
  {
    id: 4,
    title: '무인매장 설치 비용이 비싼걸로 알고있는데요?',
    description: `컨시드 무인매장은 시공없이 시스템적으로\n무인매장을 운영하실 수 있어 초기 설비 도입비가 없으며\n서비스를 이용하면서 나오는 매출의 일부를 수수료로 지불합니다.`,
  },
  {
    id: 5,
    title: '무인매장 도입하는데 시간이 얼마나 걸리나요?',
    description: `최초 상담 이후 약 2주만에 설치 및 운영까지 가능합니다.`,
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
