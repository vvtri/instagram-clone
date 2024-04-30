'use client';
import { AppStore, makeStore } from '@/modules/common/store/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { Persistor } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

// export default function StoreProvider({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	const isServer = typeof window === 'undefined';

// 	const storeRef = useRef<AppStore | null>(null);
// 	const persistorRef = useRef<Persistor | null>(null);

// 	if (isServer) {
// 		if (!storeRef.current) storeRef.current = makeStore();

// 		return <Provider store={storeRef.current}>{children}</Provider>;
// 	} else {
// 		if (!storeRef.current) storeRef.current = makeStore();
// 		persistorRef.current = persistStore(storeRef.current);

// 		return (
// 			<Provider store={storeRef.current}>
// 				<PersistGate
// 					loading={<h1 className='text-lg font-bold'>is loading</h1>}
// 					persistor={persistorRef.current!}
// 				>
// 					{children}
// 				</PersistGate>
// 			</Provider>
// 		);
// 	}
// }

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const storeRef = useRef<AppStore | null>(null);
	// const persistorRef = useRef<Persistor | null>(null);

	if (!storeRef.current) {
		storeRef.current = makeStore();
		// persistorRef.current = persistStore(storeRef.current);
	}

	return (
		<Provider store={storeRef.current}>
			{/* <PersistGate
				loading={<h1 className='text-lg font-bold'>is loading</h1>}
				persistor={persistorRef.current!}
			> */}
			{children}
			{/* </PersistGate> */}
		</Provider>
	);
}
