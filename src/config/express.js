import express from "express";
import path from 'path';

export default function expressInit(app) {
    app.use(express.static(path.join(process.cwd(), 'public')));
    app.use(express.urlencoded({ extended: false }));
};