export type IHeaderGroupType = {
	id: string;
	column: {
		getToggleSortingHandler: () =>
			| React.MouseEventHandler<HTMLDivElement>
			| undefined;
		columnDef: {
			header:
				| string
				| number
				| boolean
				| React.ReactElement<any, string | React.JSXElementConstructor<any>>
				| Iterable<React.ReactNode>
				| React.ReactPortal
				// | React.PromiseLikeOfReactNode
				| React.ComponentType<any>
				| null
				| undefined;
		};
		getIsSorted: () => string;
		getCanFilter: () => any;
		setFilterValue: (arg0: string) => void;
	};
	getContext: () => any;
};

export type ICellType = {
	id: string;
	column: {
		columnDef: {
			cell:
				| string
				| number
				| boolean
				| React.ReactElement<any, string | React.JSXElementConstructor<any>>
				| Iterable<React.ReactNode>
				| React.ReactPortal
				// | React.PromiseLikeOfReactNode
				| React.ComponentType<any>
				| null
				| undefined;
		};
	};
	getContext: () => any;
};
