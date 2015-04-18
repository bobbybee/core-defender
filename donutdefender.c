structptr(Sprite) core;

structptr(Sprite) missle1;
int missle1Active = 0;

int timeout = 100;

void shootMissleSprite(structptr(Sprite) missle) {
  missle->x = -2;
  missle->y = -2;
}

void shootMissle() {
  if(missle1Active == 0) {
    missle1Active = 1;
    shootMissleSprite(missle1);
  }
}

void init() {
  // make sprites ahead of time
  core = newSprite(0.5, 0.5, 1, 1, 0, 0, 0.5, 0.5);
  missle1 = newSprite(-10, -10, 0.4, 0.4, 0.5, 0, 1.0, 0.5);
}

void loop() {
  if(missle1Active == 1) {
    missle1->x += 0.1;
    missle1->y += 0.1;
  }

  timeout -= 1;
  if(timeout == 0) {
    timeout = 100;
    shootMissle();
  }
}
