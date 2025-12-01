import os

# Files/Folders to ignore
IGNORE_DIRS = {'node_modules', '.git', '.next', 'dist', 'build', '.vscode', 'try.html'}
IGNORE_FILES = {'package-lock.json', 'yarn.lock', '.DS_Store', 'codebase.txt'}
EXTENSIONS = {'.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json', '.html'}

def generate_codebase_file():
    with open('codebase.txt', 'w', encoding='utf-8') as outfile:
        # 1. Write the Directory Tree
        outfile.write("PROJECT STRUCTURE:\n")
        outfile.write("==================\n")
        for root, dirs, files in os.walk('.'):
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            level = root.replace('.', '').count(os.sep)
            indent = ' ' * 4 * (level)
            outfile.write(f"{indent}{os.path.basename(root)}/\n")
            subindent = ' ' * 4 * (level + 1)
            for f in files:
                if f not in IGNORE_FILES:
                    outfile.write(f"{subindent}{f}\n")
        
        outfile.write("\n\nFILE CONTENTS:\n")
        outfile.write("==================\n")

        # 2. Write the File Contents
        for root, dirs, files in os.walk('.'):
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            for file in files:
                if file in IGNORE_FILES: continue
                if not any(file.endswith(ext) for ext in EXTENSIONS): continue
                
                file_path = os.path.join(root, file)
                outfile.write(f"\n\n--- START OF FILE: {file_path} ---\n")
                try:
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        outfile.write(infile.read())
                except Exception as e:
                    outfile.write(f"Error reading file: {e}")
                outfile.write(f"\n--- END OF FILE: {file_path} ---\n")

if __name__ == "__main__":
    generate_codebase_file()
    print("Done! Upload 'codebase.txt' to the chat.")