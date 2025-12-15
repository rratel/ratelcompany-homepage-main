import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
// components
import { MotionViewport, varFade } from '@components/atoms/animate';

// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';
import { useSnackbar } from '@components/atoms/snackbar';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, { RHFTextField } from '@components/molecules/hook-form';

// ----------------------------------------------------------------------

const ContactScheme = Yup.object().shape({
  from_store: Yup.string().required('상호명은 필수값입니다.'),
  from_phone: Yup.string()
    .required('전화번호는 필수값입니다.')
    .matches(/^[0-9]{11}$/i, '휴대폰 번호는 - 없이 입력해주세요'),
});

const defaultValues = {
  from_store: '',
  from_phone: '',
  from_room: '',
  message: '',
};

export default function ContactForm() {
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    resolver: yupResolver(ContactScheme),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await emailjs.send(
        'service_9hc2n9m',
        'template_b6zwcjn',
        data,
        '7bQ_ZtepwXkRatYcC'
      );
      if (result?.status === 200) {
        enqueueSnackbar('문의가 제출되었습니다.');
      } else {
        enqueueSnackbar('문의 제출에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack component={MotionViewport} spacing={5} id="contact">
        <m.div variants={varFade().inUp}>
          <Typography variant="h3">
            컨시드로 저렴하게
            <br />
            무인매장을 도입하세요
          </Typography>
          <Typography variant="subtitle1" mt={1.5}>
            문의번호 : 010-8013-9389
          </Typography>
        </m.div>

        <Stack spacing={3}>
          <m.div variants={varFade().inUp}>
            <RHFTextField name="from_store" label="상호명" />
          </m.div>

          <m.div variants={varFade().inUp}>
            <RHFTextField name="from_room" label="방 갯수" />
          </m.div>

          <m.div variants={varFade().inUp}>
            <RHFTextField name="from_phone" label="휴대폰번호" />
          </m.div>

          <m.div variants={varFade().inUp}>
            <RHFTextField name="message" label="문의내용을 작성해주세요" multiline rows={4} />
          </m.div>
        </Stack>

        <m.div variants={varFade().inUp}>
          <LoadingButton type="submit" size="large" variant="contained" loading={isSubmitting}>
            문의하기
          </LoadingButton>
        </m.div>
      </Stack>
    </FormProvider>
  );
}
