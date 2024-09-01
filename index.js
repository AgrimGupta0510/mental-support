import axios from 'axios';
import chalk from 'chalk';

async function fetchQuote() {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    const quote = response.data[0].q;
    const author = response.data[0].a;
    console.log(chalk.blue(`"${quote}" - ${author}`));
  } catch (error) {
    console.error(chalk.red('Failed to fetch quote.'));
  }
}

function displayTips() {
  const tips = [
    "Take regular breaks to clear your mind.",
    "Practice mindfulness or meditation.",
    "Stay connected with friends and family.",
    "Exercise regularly to boost your mood.",
    "Maintain a healthy and balanced diet.",
    "Stay hydrated by drinking plenty of water.",
    "Get enough sleep to restore your energy.",
    "Set realistic and achievable goals.",
    "Organize your workspace to reduce stress.",
    "Learn to say no to avoid overcommitment.",
    "Take deep breaths to calm yourself.",
    "Listen to music that makes you happy.",
    "Spend time in nature to relax.",
    "Pursue hobbies that you enjoy.",
    "Practice gratitude by keeping a journal.",
    "Limit your exposure to negative news.",
    "Read books or articles that interest you.",
    "Take up a new skill or hobby.",
    "Declutter your living space.",
    "Plan your day to manage your time effectively.",
    "Take short walks during the day.",
    "Engage in creative activities like drawing or painting.",
    "Avoid excessive use of social media.",
    "Take time to reflect on your achievements.",
    "Practice positive self-talk.",
    "Surround yourself with positive influences.",
    "Do something kind for someone else.",
    "Set aside time for relaxation.",
    "Avoid comparing yourself to others.",
    "Accept that it's okay to make mistakes.",
    "Seek professional help if you need it.",
    "Prioritize tasks and focus on one thing at a time.",
    "Celebrate small wins.",
    "Stay curious and keep learning.",
    "Volunteer for a cause you care about.",
    "Keep a clean and tidy environment.",
    "Laugh often and find humor in everyday situations.",
    "Practice deep stretching or yoga.",
    "Visualize positive outcomes.",
    "Take a digital detox regularly.",
    "Connect with supportive communities.",
    "Express your feelings through writing.",
    "Practice self-compassion.",
    "Listen to podcasts that inspire you.",
    "Spend quality time with pets if you have them.",
    "Engage in activities that make you lose track of time.",
    "Create a vision board for your goals.",
    "Limit caffeine and sugar intake.",
    "Spend time in sunlight.",
    "Try aromatherapy with calming scents.",
    "Take on small projects that bring you joy."
    ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  console.log(chalk.green(`Tip: ${randomTip}`));
}

async function main() {
  console.log(chalk.yellow('Welcome to Mental Health Coder Support!'));
  await fetchQuote();
  displayTips();
}

export default main;