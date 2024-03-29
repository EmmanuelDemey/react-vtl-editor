# react-vtl-editor

A react VTL editor

[![Build Status](https://travis-ci.org/statisticsnorway/react-vtl-editor.svg?branch=master)](https://travis-ci.org/statisticsnorway/react-vtl-editor)
[![Coverage Status](https://coveralls.io/repos/github/statisticsnorway/react-vtl-editor/badge.svg?branch=master)](https://coveralls.io/github/statisticsnorway/react-vtl-editor?branch=master)

The documentation can be found in the [docs](https://github.com/statisticsnorway/react-vtl-editor/tree/master/docs) folder and [browsed online](https://statisticsnorway.github.io/react-vtl-editor).

[Storybook](https://statisticsnorway.github.io/react-vtl-editor/storybook) is also available online.

## Usage

```javascript
import React, { useState } from 'react';
import { VtlEditor } from 'react-vtl-editor';

const MyComponent = () => {
	const [value, setValue] = useState('');
	const [valid, setValid] = useState(true);
	return (
		<>
			<VtlEditor handleValue={setValue} handleValid={setValid} />
			<div>{`My expression text : ${value}`}</div>
			<div>{`Is my expression valid : ${valid}`}</div>
		</>
	);
};

export default MyComponent;
```

## Todo

- update `Rollup` configuration to display tooltip (https://github.com/react-monaco-editor/react-monaco-editor/issues/210)
- work on UI customization of the component
