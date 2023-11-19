import dynamic, {DynamicOptions} from 'next/dynamic';

export const DynamicCategoryList = dynamic(import('../CategoryList/CategoryList') as DynamicOptions, {
	ssr: false
});