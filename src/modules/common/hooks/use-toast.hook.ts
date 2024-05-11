import { useTheme } from 'next-themes';
import { ToastContent, ToastOptions, toast } from 'react-toastify';

export const useToast = () => {
	const { resolvedTheme } = useTheme();
	const success = (content: ToastContent, opts?: ToastOptions) =>
		toast.success(content, { ...opts, theme: resolvedTheme });
	const warning = (content: ToastContent, opts?: ToastOptions) =>
		toast.warning(content, { ...opts, theme: resolvedTheme });
	const error = (content: ToastContent, opts?: ToastOptions) =>
		toast.error(content, { ...opts, theme: resolvedTheme });
	const info = (content: ToastContent, opts?: ToastOptions) =>
		toast.info(content, { ...opts, theme: resolvedTheme });

	return { success, warning, error, info };
};
