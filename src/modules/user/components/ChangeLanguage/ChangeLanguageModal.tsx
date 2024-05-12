'client';

import FooterLanguageSelect from '@/modules/common/components/footer/FooterLanguageSelect';
import Modal from '@/modules/common/components/modal/Modal';
import {
  useAppDispatch,
  useAppSelector,
} from '@/modules/common/hooks/store.hook';
import { useTranslations } from 'next-intl';
import { setIsShowChangeLanguageModal } from '../../slices/user.slice';

export default function ChangeLanguageModal() {
  const isShow = useAppSelector(({ user }) => user.isShowChangeLanguageModal);
  const dispatch = useAppDispatch();
  const t = useTranslations('Client');

  const handleClose = () => {
    dispatch(setIsShowChangeLanguageModal(false));
  };

  return (
    <Modal isShow={isShow} onClickOutside={handleClose} onClose={handleClose}>
      <div className="bg-bg-primary text-text-primary flex items-center justify-center flex-col gap-10 border border-separator rounded-lg py-10 px-14 md:py-20 md:px-28">
        <h3 className="text-3xl first-letter:uppercase font-bold">
          {t('common.navbar.changeLanguage')}
        </h3>

        <div className="flex">
          <FooterLanguageSelect />
        </div>
      </div>
    </Modal>
  );
}
