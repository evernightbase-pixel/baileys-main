"use strict";

const chalk = require("chalk");

// Fungsi utilitas untuk animasi
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function typewriter(text, delay = 25) {
  for (let i = 0; i < text.length; i++) {
    process.stdout.write(text[i]);
    await sleep(delay);
  }
  console.log();
}

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );
};

clearConsole();

console.log(
  chalk.cyanBright.bold(`────────────────────────────────────`) + '\n' +
  chalk.magentaBright.bold(`          ░▀█▀░█▀▄░▀█▀░█▀█          `) + '\n' +
  chalk.magentaBright.bold(`          ░░█░░█▀▀░░█░░█░█          `) + '\n' +
  chalk.magentaBright.bold(`          ░▀▀▀░▀░░░▀▀▀░▀░▀          `) + '\n' +
  chalk.cyanBright.bold(`───────────── ▀██ ██▀ ──────────────`) + '\n' +
  chalk.cyanBright.bold(`──────────────  ███  ───────────────`) + '\n' +
  chalk.cyanBright.bold(`───────────── ▄██ ██▄ ──────────────`) + '\n' +
  chalk.magentaBright.bold(`░█▀▀░█░█░█▀▀░█▀▄░█▀█░▀█▀░█▀▀░█░█░▀█▀`) + '\n' +
  chalk.magentaBright.bold(`░█▀▀░▀▄▀░█▀▀░█▀▄░█░█░░█░░█▄█░█▀█░░█░`) + '\n' +
  chalk.magentaBright.bold(`░▀▀▀░░▀░░▀▀▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░▀░░▀░`) + '\n' +
  chalk.cyanBright.bold(`────────────────────────────────────`)
);

console.log(
  chalk.whiteBright.bold(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`) + '\n' +
  chalk.whiteBright.bold(`┃`) + chalk.yellowBright.bold(` [ SYSTEM INFORMATION ] `) + chalk.whiteBright.bold(`                          ┃`) + '\n' +
  chalk.whiteBright.bold(`┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫`) + '\n' +
  chalk.whiteBright.bold(`┃`) + chalk.cyanBright(`  👤 Author    : `) + chalk.white(`[ King Alip ]`) + chalk.whiteBright.bold(`             ┃`) + '\n' +
  chalk.whiteBright.bold(`┃`) + chalk.cyanBright(`  🛠️  Recode By : `) + chalk.white(`[ ipintheoffc ]`) + chalk.whiteBright.bold(`           ┃`) + '\n' +
  chalk.whiteBright.bold(`┃`) + chalk.cyanBright(`  📦 Version   : `) + chalk.white(`10.5.0 (Latest)`) + chalk.whiteBright.bold(`                ┃`) + '\n' +
  chalk.whiteBright.bold(`┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫`) + '\n' +
  chalk.whiteBright.bold(`┃`) + chalk.magentaBright.bold(` [ CONTACT & SOCIAL ] `) + chalk.whiteBright.bold(`                            ┃`) + '\n' +
  chalk.whiteBright.bold(`┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫`) + '\n' +
  chalk.whiteBright.bold(`┃`) + chalk.greenBright(`  WhatsApp  : `) + chalk.white(`+62 881-0222-88695`) + chalk.whiteBright.bold(`               ┃`) + '\n' +
  chalk.whiteBright.bold(`┃`) + chalk.blueBright(`  Telegram  : `) + chalk.white(`@IPINSHOP`) + chalk.whiteBright.bold(`                       ┃`) + '\n' +
  chalk.whiteBright.bold(`┃`) + chalk.redBright(`  Youtube : `) + chalk.white(`@PinshopCik`) + chalk.whiteBright.bold(`                       ┃`) + '\n' +
  chalk.whiteBright.bold(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\n`)
);

// Eksekusi Animasi Mengetik
(async () => {
  await sleep(300);
  await typewriter(chalk.yellowBright.bold(" [ CATATAN & INFORMASI ]"));
  await typewriter(chalk.white(" ━━━━━━━━━━━━━━━━━━━"));
  await typewriter(chalk.cyan(" > ") + chalk.white("Ingin up reseller atau partner? Chat Ipin langsung."));
  
  console.log();
  
  await typewriter(chalk.magenta(" [ PRICELIST ]"));
  await typewriter(chalk.white(" • ") + chalk.white("Biaya up reseller         : ") + chalk.greenBright("90k"));
  await typewriter(chalk.white(" • ") + chalk.white("Biaya up partner (dari non): ") + chalk.greenBright("180k"));
  await typewriter(chalk.white(" • ") + chalk.white("Biaya up partner (dari res): ") + chalk.greenBright("140k"));

  console.log();

  await typewriter(chalk.blueBright(" [ BENEFITS ]"));
  await typewriter(chalk.white(" - ") + chalk.cyan("Reseller ") + chalk.white(": Add nomor bot sepuasnya & hanya bisa menjual SC."));
  await typewriter(chalk.white(" - ") + chalk.cyan("Partner  ") + chalk.white(": Add nomor bot sepuasnya, tapi bisa menjual reseller/SC."));

  console.log();

  await typewriter(chalk.whiteBright.bold(" Tunggu apa lagi? Ayo investasi di SC kami dengan menjadi"));
  await typewriter(chalk.whiteBright.bold(" reseller maupun partner."));
  
  console.log(chalk.gray("\n // Selesai.\n"));
})();

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
