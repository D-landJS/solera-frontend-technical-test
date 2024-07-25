export function useLocalStorage<T>(key: string, initialValue: T) {
	const getValue = () => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	};

	const setValue = (value: T) => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
		}
	};

	return {
		getValue,
		setValue,
	};
}
