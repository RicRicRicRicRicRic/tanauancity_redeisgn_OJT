import pygame
import random
import sys

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 600, 400
BLOCK_SIZE = 20
FPS = 10

# Colors (R, G, B)
BLACK = (15, 15, 15)
WHITE = (255, 255, 255)
GREEN = (46, 204, 113)
DARK_GREEN = (39, 174, 96)
RED = (231, 76, 60)
GRAY = (50, 50, 50)

# Set up display
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Snake Game")
clock = pygame.time.Clock()

# Fonts
font = pygame.font.SysFont("arial", 25)
game_over_font = pygame.font.SysFont("arial", 40, bold=True)


def draw_grid():
    """Draws a subtle grid background."""
    for x in range(0, WIDTH, BLOCK_SIZE):
        pygame.draw.line(screen, GRAY, (x, 0), (x, HEIGHT), 1)
    for y in range(0, HEIGHT, BLOCK_SIZE):
        pygame.draw.line(screen, GRAY, (0, y), (WIDTH, y), 1)


def spawn_food(snake):
    """Spawns food at a random grid position not occupied by the snake."""
    while True:
        x = random.randrange(0, WIDTH, BLOCK_SIZE)
        y = random.randrange(0, HEIGHT, BLOCK_SIZE)
        if (x, y) not in snake:
            return [x, y]


def main():
    # Game variables
    snake = [[100, 100], [80, 100], [60, 100]]
    direction = "RIGHT"
    next_direction = direction
    food = spawn_food(snake)
    score = 0
    running = True
    game_over = False

    while running:
        # Event handling
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            elif event.type == pygame.KEYDOWN:
                if game_over:
                    if event.key == pygame.K_r:
                        # Reset game
                        return main()
                    elif event.key == pygame.K_q:
                        pygame.quit()
                        sys.exit()
                else:
                    if event.key in (pygame.K_UP, pygame.K_w) and direction != "DOWN":
                        next_direction = "UP"
                    elif event.key in (pygame.K_DOWN, pygame.K_s) and direction != "UP":
                        next_direction = "DOWN"
                    elif event.key in (pygame.K_LEFT, pygame.K_a) and direction != "RIGHT":
                        next_direction = "LEFT"
                    elif event.key in (pygame.K_RIGHT, pygame.K_d) and direction != "LEFT":
                        next_direction = "RIGHT"

        if not game_over:
            direction = next_direction
            
            # Calculate new head position
            head_x, head_y = snake[0]
            if direction == "UP":
                head_y -= BLOCK_SIZE
            elif direction == "DOWN":
                head_y += BLOCK_SIZE
            elif direction == "LEFT":
                head_x -= BLOCK_SIZE
            elif direction == "RIGHT":
                head_x += BLOCK_SIZE

            new_head = [head_x, head_y]

            # Check collision with walls or self
            if (
                head_x < 0 or head_x >= WIDTH or 
                head_y < 0 or head_y >= HEIGHT or 
                new_head in snake
            ):
                game_over = True
            else:
                snake.insert(0, new_head)
                
                # Check collision with food
                if new_head == food:
                    score += 10
                    food = spawn_food(snake)
                else:
                    snake.pop()  # Remove tail if no food eaten

        # Drawing everything
        screen.fill(BLACK)
        draw_grid()

        # Draw food
        pygame.draw.rect(screen, RED, (*food, BLOCK_SIZE, BLOCK_SIZE), border_radius=4)

        # Draw snake
        for i, segment in enumerate(snake):
            color = GREEN if i == 0 else DARK_GREEN
            pygame.draw.rect(screen, color, (*segment, BLOCK_SIZE, BLOCK_SIZE), border_radius=4)

        # Draw score
        score_surface = font.render(f"Score: {score}", True, WHITE)
        screen.blit(score_surface, (10, 10))

        # Game Over Screen Overlay
        if game_over:
            overlay = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
            overlay.fill((0, 0, 0, 180))  # Semi-transparent dark background
            screen.blit(overlay, (0, 0))

            over_surf = game_over_font.render("GAME OVER", True, RED)
            prompt_surf = font.render("Press 'R' to Restart or 'Q' to Quit", True, WHITE)
            
            screen.blit(over_surf, (WIDTH // 2 - over_surf.get_width() // 2, HEIGHT // 2 - 50))
            screen.blit(prompt_surf, (WIDTH // 2 - prompt_surf.get_width() // 2, HEIGHT // 2 + 10))

        pygame.display.flip()
        clock.tick(FPS)

if __name__ == "__main__":
    main()