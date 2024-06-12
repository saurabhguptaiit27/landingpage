
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice.js';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    return (
        <div onClick={() => dispatch(toggleTheme())}>
          Switch to {theme === "light" ? "dark" : "light"} theme
        </div>
    );
};

export default ThemeToggle;
