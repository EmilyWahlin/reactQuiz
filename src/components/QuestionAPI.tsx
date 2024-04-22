import { useEffect, useState } from "react";

export async function QuizApi(): Promise<Question[]> {
    const URL = "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple";



// interface Question {
//     type: string;
//     difficulty: string;
//     category: string;
//     question: string;
//     correct_answer: string;
//     incorrect_answers: string[];
// 