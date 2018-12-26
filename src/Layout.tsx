import * as React from 'react';
import { isEmpty } from 'lodash';

const styles: { [key: string]: React.CSSProperties } = {
	center: {
		alignItems: 'center',
		display: 'flex',
		margin: '0 5px'
	},
	container: {
		alignItems: 'center',
		display: 'flex'
	},
	left: {
		alignItems: 'center',
		display: 'flex'
	},
	right: {
		alignItems: 'center',
		display: 'flex'
	}
};

const getStyleContainer = (style?: React.CSSProperties) => {
	if (isEmpty(style)) {
		return styles.container;
	}

	return {
		...styles.container,
		...style
	};
};

const Layout = React.memo((props: LayoutProps) => (
	<div style={getStyleContainer(props.style)}>
		<div style={styles.left}>{props.left}</div>
		<div style={styles.center}>{props.center}</div>
		<div style={styles.right}>{props.right}</div>
	</div>
));

interface LayoutProps {
	center: JSX.Element;
	left: JSX.Element;
	right: JSX.Element;
	style?: React.CSSProperties;
}

export default Layout;