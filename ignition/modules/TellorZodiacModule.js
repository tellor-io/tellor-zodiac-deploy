const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ALL_ADDRS = '0x0000000000000000000000000000000000000001';
const COOLDOWN = 0;
const EXPIRATION = 60;

module.exports = buildModule("TellorZodiacModule", (m) => {
  const owner = m.getParameter("owner", ALL_ADDRS);
  const avatar = m.getParameter("avatar", ALL_ADDRS);
  const target = m.getParameter("target", ALL_ADDRS);
  const tellorAddress = m.getParameter("tellorAddress", ALL_ADDRS);
  const cooldown = m.getParameter("cooldown", COOLDOWN);
  const expiration = m.getParameter("expiration", EXPIRATION);

  const tellorModule = m.contract("TellorModule", [owner, avatar, target, tellorAddress, cooldown, expiration]);

  return { tellorModule };
});

